// Inspired by https://github.com/BuilderIO/qwik/issues/3345#issuecomment-1475385715
import type {D1Database} from "@miniflare/d1";
import {drizzle} from "drizzle-orm/d1";
import type {DrizzleD1Database} from "drizzle-orm/d1";
import {migrate} from "drizzle-orm/d1/migrator";
import {eq, getTableColumns, sql} from "drizzle-orm";
import type {PartData, PartModel, ProjectModel} from "$lib/schema";
import {partsSchema, projectSchema} from "$lib/schema";


let getDevDb = async (): Promise<any> => {
    // throw new Error("Not in a dev env, but attempted to access dev db");
    console.log("ERROR: Not in a dev env, but attempted to access dev db")
};


if (import.meta.env.DEV) {
    const fs = await import("fs/promises");
    const {D1Database: D1D, D1DatabaseAPI} = await import("@miniflare/d1");
    const {createSQLiteDB} = await import("@miniflare/shared");

    let devDb: D1Database;

    getDevDb = async (): Promise<D1Database> => {
        if (!devDb) {
            const basePath = ".wrangler/state/d1";
            await fs.mkdir(basePath, {recursive: true});
            const sqlLite = await createSQLiteDB(
                `${basePath}/BIONIC_PARTS_DB.sqlite3`
            );
            devDb = new D1D(new D1DatabaseAPI(sqlLite));
        }
        return devDb;
    };
}

const getDbFromPlatform = async (platform: App.Platform | undefined): Promise<DrizzleD1Database> => {
    let db;
    if (platform?.env?.BIONIC_PARTS_DB) {
        db = platform.env?.BIONIC_PARTS_DB;
    } else {
        db = await getDevDb();
    }

    // Migrator causing cannot start a transaction within a transaction
    // Migrator requires node packages not available in workers env
    // if (import.meta.env.DEV) { //we can only apply migrations in dev
    //     const ddb = drizzle(db as any);
    //     await migrate(ddb, {migrationsFolder: "./src/lib/migrations"});
    //     return ddb;
    // }

    return drizzle(db as any); //@todo why is Miniflare's D1Database incompatible with Cloudflare's?
};

export class DataLayer {
    public readonly db: DrizzleD1Database;

    constructor(db: DrizzleD1Database) {
        this.db = db;
    }

    public async addNewProject(project: ProjectModel): Promise<any> {
        return this.db.insert(projectSchema).values(project).run();
    }

    public async getProjectsByOnshapeDocId(docId: string): Promise<ProjectModel[]> {
        //broken
        // const qry = this.db.select().from(projectSchema)
        //     .where(sql`EXISTS (
        //         SELECT 1
        //         FROM json_each(json_extract(data, '$.onshape.docIds'))
        //         WHERE value = ${docId}`);
        // const sqliteDialect = new SQLiteSyncDialect();
        // console.log("qry", sqliteDialect.sqlToQuery(qry));
        // const projects = await qry.get();
        // return projects
        const qry = sql`SELECT *
            FROM projects
            WHERE EXISTS (
                SELECT 1
                FROM json_each(json_extract(data, '$.onshape.docIds'))
                WHERE value = ${docId}
            );`
        const projects = await this.db.all<ProjectModel>(qry)

        const columns = getTableColumns(projectSchema);

        const proj = projects.map(p => {
            const newp: Record<string, any> = {};
            for (const column of Object.values(columns)) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                newp[column.name] = column.mapFromDriverValue(p[column.name])
            }

            return newp as ProjectModel
        })
        // console.log("proj", proj)

        return proj;
    }


    async getAllProjects() {
        return this.db.select().from(projectSchema).all();
    }

    async addDoc2Project(onshapeDocId: string, projectId: number) {
        const project = await this.db.select().from(projectSchema).where(eq(projectSchema.id, projectId)).get();
        console.log("project", project);
        if (!project.data) {
            throw new Error("Project data is undefined")
        }
        project.data.onshape.docIds.push(onshapeDocId);

        await this.db.update(projectSchema).set({[projectSchema.data.name]: project.data}).where(eq(projectSchema.id, projectId)).run();

        return project;
    }

    async getProjectById(projectId: number) {
        return this.db.select().from(projectSchema).where(eq(projectSchema.id, projectId)).get();
    }


    // @todo should probs include the project id
    async getReleasedPartsForElement(did: string, eid: string) {
        const qry = sql`SELECT *
            FROM parts
            WHERE json_extract(data, '$.documentId') = ${did}
            AND json_extract(data, '$.elementId') = ${eid}
            ORDER BY id DESC;`
        const parts = await this.db.all(qry);

        const columns = getTableColumns(partsSchema);

        return parts.map(p => {
            const newp: Record<string, any> = {};
            for (const column of Object.values(columns)) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                newp[column.name] = column.mapFromDriverValue(p[column.name])
            }

            return newp as PartModel
        });
    }

    async addReleasedPart(args: {projectId: number, data: PartData}) {
        return await this.db.insert(partsSchema).values({
            projectId: args.projectId,
            data: args.data
        }).run();
    }
}

export default getDbFromPlatform;
