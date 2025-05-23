/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.164.16301-d273853a12e7
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTAliasEntryParams } from './BTAliasEntryParams';
import {
    BTAliasEntryParamsFromJSON,
    BTAliasEntryParamsFromJSONTyped,
    BTAliasEntryParamsToJSON,
} from './BTAliasEntryParams';

/**
 * 
 * @export
 * @interface BTAliasParams
 */
export interface BTAliasParams {
    /**
     * 
     * @type {Array<BTAliasEntryParams>}
     * @memberof BTAliasParams
     */
    additions?: Array<BTAliasEntryParams>;
    /**
     * 
     * @type {string}
     * @memberof BTAliasParams
     */
    description?: string;
    /**
     * 
     * @type {Array<BTAliasEntryParams>}
     * @memberof BTAliasParams
     */
    entries?: Array<BTAliasEntryParams>;
    /**
     * 
     * @type {string}
     * @memberof BTAliasParams
     */
    name?: string;
    /**
     * 
     * @type {Array<BTAliasEntryParams>}
     * @memberof BTAliasParams
     */
    removals?: Array<BTAliasEntryParams>;
}

/**
 * Check if a given object implements the BTAliasParams interface.
 */
export function instanceOfBTAliasParams(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTAliasParamsFromJSON(json: any): BTAliasParams {
    return BTAliasParamsFromJSONTyped(json, false);
}

export function BTAliasParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTAliasParams {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'additions': !exists(json, 'additions') ? undefined : ((json['additions'] as Array<any>).map(BTAliasEntryParamsFromJSON)),
        'description': !exists(json, 'description') ? undefined : json['description'],
        'entries': !exists(json, 'entries') ? undefined : ((json['entries'] as Array<any>).map(BTAliasEntryParamsFromJSON)),
        'name': !exists(json, 'name') ? undefined : json['name'],
        'removals': !exists(json, 'removals') ? undefined : ((json['removals'] as Array<any>).map(BTAliasEntryParamsFromJSON)),
    };
}

export function BTAliasParamsToJSON(value?: BTAliasParams | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'additions': value.additions === undefined ? undefined : ((value.additions as Array<any>).map(BTAliasEntryParamsToJSON)),
        'description': value.description,
        'entries': value.entries === undefined ? undefined : ((value.entries as Array<any>).map(BTAliasEntryParamsToJSON)),
        'name': value.name,
        'removals': value.removals === undefined ? undefined : ((value.removals as Array<any>).map(BTAliasEntryParamsToJSON)),
    };
}

