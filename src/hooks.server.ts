import type { Handle, Redirect } from '@sveltejs/kit';
import { redirect } from "@sveltejs/kit";
import getdb, { DataLayer } from "$lib/getdb";
import { sequence } from "@sveltejs/kit/hooks";
import { getOnshapeClientFromCookies } from "$lib/onshape";
import { doTrelloAuthFlow, getTrelloClientFromCookies } from "$lib/trello";
import { type BuildAuthorizeUrlParams, Oauth } from "$lib/OnshapeAPI";
import { base64 } from "$lib/util";
import { ONSHAPE_OAUTH_CLIENT_ID, ONSHAPE_OAUTH_REDIRECT_URI } from '$env/static/private';

const redirectUrl = ONSHAPE_OAUTH_REDIRECT_URI
if (!redirectUrl) {
    throw new Error("No ONSHAPE_OAUTH_REDIRECT_URI set");
}
const clientId = ONSHAPE_OAUTH_CLIENT_ID;
if (!clientId) {
    throw new Error("No ONSHAPE_OAUTH_CLIENT_ID set");
}

const injectDb = (async ({ event, resolve }) => {
    if (event.request.url === "http://sveltekit-prerender/[fallback]") {
        // Don't inject for fallback pre-rendering
        return resolve(event);
    }

    // Inject the database into all requests
    event.locals.rawDb = await getdb(event.platform);
    event.locals.db = new DataLayer(event.locals.rawDb);

    return resolve(event);
}) satisfies Handle;

const injectOnshapeClient = (async ({ event, resolve }) => {
    if (event.request.url === "http://sveltekit-prerender/[fallback]") {
        // Don't inject for fallback pre-rendering
        return resolve(event);
    }

    // Inject the onshape client into all requests
    event.locals.onshape = {
        client: await getOnshapeClientFromCookies(event.cookies),
        loginRedirect: (state?: { [key: string]: string }, companyId?: string): Redirect => {
            let stateStr = "";
            if (state) {
                stateStr = base64(JSON.stringify(state));
            } else {
                const v = { type: "url", url: event.url.toString() };
                stateStr = base64(JSON.stringify(v));
            }

            const args: BuildAuthorizeUrlParams = {
                clientId: clientId,
                redirectUrl: redirectUrl,
                state: stateStr
            };
            if (companyId) {
                args.companyId = companyId;
            }
            const authUrl = Oauth.buildAuthorizeUrl(args);
            return redirect(307, authUrl.toString());

        }
    };

    return resolve(event);
}) satisfies Handle;

const injectTrelloClient = (async ({ event, resolve }) => {
    if (event.request.url === "http://sveltekit-prerender/[fallback]") {
        // Don't inject for fallback pre-rendering
        return resolve(event);
    }

    // Inject the onshape client into all requests
    event.locals.trello = {
        client: await getTrelloClientFromCookies(event.cookies),
        loginRedirect: (): Promise<Redirect> => {
            return doTrelloAuthFlow(event.cookies, event.url);
        }
    };

    return resolve(event);
}) satisfies Handle;


export const handle = sequence(injectDb, injectOnshapeClient, injectTrelloClient);