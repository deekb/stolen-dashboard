import {describe, it, expect} from "vitest";
import {base64, base64decode, filterProjects} from "$lib/util";
import type {ProjectModel} from "$lib/schema";
import type {BTGlobalTreeNodeListResponseBTTeamInfo} from "$lib/OnshapeAPI";


describe("base64", () => {
    it('should encode base 64', function () {
        const encoded = base64("hello world")
        expect(encoded).toBe("aGVsbG8gd29ybGQ=");
    });
    it('should decode base 64', function () {
        const encoded = base64decode("aGVsbG8gd29ybGQ=")
        expect(encoded).toBe("hello world");
    });
})

describe("filterProjects", () => {
    it('should not remove projects user has write access to', function () {
        const teamId = "abcdef";
        const projects: ProjectModel[] = [
            {
                id: 1,
                slug: "test",
                name: "test",
                data: {
                    onshape: {docIds: ["123"], access: {write: [{teamId: teamId}]}, projectOwnerId: "blake"},
                    trello: {
                        boardId: "123",
                        listId: "123",
                        token: {
                            oauthAccessToken: "irrelevant",
                            oauthAccessTokenSecret: "irrelevant",
                            expiryTimestamp: -1
                        }
                    }
                }
            },
        ]
        const teaminfo: BTGlobalTreeNodeListResponseBTTeamInfo = {items: [{id: teamId}]}
        const filtered = filterProjects(projects, teaminfo, "random");
        expect(filtered.length).toBe(1);
    });

    it('should remove projects user does not have perms to', function () {
        const projects: ProjectModel[] = [
            {
                id: 1,
                slug: "test",
                name: "test",
                data: {
                    onshape: {
                        docIds: ["123"],
                        access: {write: [{teamId: "someOtherProject"}]},
                        projectOwnerId: "blake"
                    },
                    trello: {
                        boardId: "123",
                        listId: "123",
                        token: {
                            oauthAccessToken: "irrelevant",
                            oauthAccessTokenSecret: "irrelevant",
                            expiryTimestamp: -1
                        }
                    }
                }
            },
        ]
        const teaminfo: BTGlobalTreeNodeListResponseBTTeamInfo = {items: [{id: "abcdef"}]}
        const filtered = filterProjects(projects, teaminfo, "random");
        expect(filtered.length).toBe(0);
    });

    it('should return projects that the user is the owner of', function () {
        const projects: ProjectModel[] = [
            {
                id: 1,
                slug: "test",
                name: "test",
                data: {
                    onshape: {
                        docIds: ["123"],
                        access: {write: [{teamId: "someOtherProject"}]},
                        projectOwnerId: "blake"
                    },
                    trello: {
                        boardId: "123",
                        listId: "123",
                        token: {
                            oauthAccessToken: "irrelevant",
                            oauthAccessTokenSecret: "irrelevant",
                            expiryTimestamp: -1
                        }
                    }
                }
            },
        ]
        const teaminfo: BTGlobalTreeNodeListResponseBTTeamInfo = {items: [{id: "abcdef"}]}
        const filtered = filterProjects(projects, teaminfo, "blake");
        expect(filtered.length).toBe(1);
    });
})