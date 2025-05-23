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
import type { BTEntityGeometry35 } from './BTEntityGeometry35';
import {
    BTEntityGeometry35FromJSON,
    BTEntityGeometry35FromJSONTyped,
    BTEntityGeometry35ToJSON,
} from './BTEntityGeometry35';
import type { BTTessellatedGeometry2576 } from './BTTessellatedGeometry2576';
import {
    BTTessellatedGeometry2576FromJSON,
    BTTessellatedGeometry2576FromJSONTyped,
    BTTessellatedGeometry2576ToJSON,
} from './BTTessellatedGeometry2576';

/**
 * 
 * @export
 * @interface BTEntityPoint29
 */
export interface BTEntityPoint29 extends BTTessellatedGeometry2576 {
    /**
     * 
     * @type {string}
     * @memberof BTEntityPoint29
     */
    btType?: string;
    /**
     * 
     * @type {Array<number>}
     * @memberof BTEntityPoint29
     */
    point?: Array<number>;
}

/**
 * Check if a given object implements the BTEntityPoint29 interface.
 */
export function instanceOfBTEntityPoint29(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTEntityPoint29FromJSON(json: any): BTEntityPoint29 {
    return BTEntityPoint29FromJSONTyped(json, false);
}

export function BTEntityPoint29FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTEntityPoint29 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTTessellatedGeometry2576FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'point': !exists(json, 'point') ? undefined : json['point'],
    };
}

export function BTEntityPoint29ToJSON(value?: BTEntityPoint29 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTTessellatedGeometry2576ToJSON(value),
        'btType': value.btType,
        'point': value.point,
    };
}

