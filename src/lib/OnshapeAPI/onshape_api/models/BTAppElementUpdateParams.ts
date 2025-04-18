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
import type { BTAppElementChangeParams } from './BTAppElementChangeParams';
import {
    BTAppElementChangeParamsFromJSON,
    BTAppElementChangeParamsFromJSONTyped,
    BTAppElementChangeParamsToJSON,
} from './BTAppElementChangeParams';
import type { BTJEdit3734 } from './BTJEdit3734';
import {
    BTJEdit3734FromJSON,
    BTJEdit3734FromJSONTyped,
    BTJEdit3734ToJSON,
} from './BTJEdit3734';
import type { BTMetadataPropertyUpdateParams } from './BTMetadataPropertyUpdateParams';
import {
    BTMetadataPropertyUpdateParamsFromJSON,
    BTMetadataPropertyUpdateParamsFromJSONTyped,
    BTMetadataPropertyUpdateParamsToJSON,
} from './BTMetadataPropertyUpdateParams';

/**
 * 
 * @export
 * @interface BTAppElementUpdateParams
 */
export interface BTAppElementUpdateParams {
    /**
     * Edits to be applied to the element's subelement data.
     * @type {Array<BTAppElementChangeParams>}
     * @memberof BTAppElementUpdateParams
     */
    changes?: Array<BTAppElementChangeParams>;
    /**
     * The label that will appear in the document's edit history for this operation. If blank, a value will be auto-generated.
     * @type {string}
     * @memberof BTAppElementUpdateParams
     */
    description?: string;
    /**
     * A json patch that will be applied to the application element's json data.
     * @type {string}
     * @memberof BTAppElementUpdateParams
     */
    jsonPatch?: string;
    /**
     * 
     * @type {BTJEdit3734}
     * @memberof BTAppElementUpdateParams
     */
    jsonTreeEdit?: BTJEdit3734;
    /**
     * The id of the last change made to this application element. This can be retrieved from the response for any app element modification endpoint.
     * @type {string}
     * @memberof BTAppElementUpdateParams
     */
    parentChangeId?: string;
    /**
     * Edits to be applied to the element's metadata.
     * @type {Array<BTMetadataPropertyUpdateParams>}
     * @memberof BTAppElementUpdateParams
     */
    propertyUpdates?: Array<BTMetadataPropertyUpdateParams>;
    /**
     * If true, errors in request processing will be returned in a 200 response with a meaningful description. Otherwise, errors will result in a relevant HTTP error response.
     * @type {boolean}
     * @memberof BTAppElementUpdateParams
     */
    returnError?: boolean;
    /**
     * If specified, and jsonTreeEdit is non-empty, the json difference will be returned in this format, otherwise no json difference will be returned.
     * @type {string}
     * @memberof BTAppElementUpdateParams
     */
    returnJsonDifferenceFormat?: BTAppElementUpdateParamsReturnJsonDifferenceFormatEnum;
    /**
     * The id of the transaction in which this operation should take place. Transaction ids can be generated through the AppElement startTransaction API.
     * @type {string}
     * @memberof BTAppElementUpdateParams
     */
    transactionId?: string;
}


/**
 * @export
 */
export const BTAppElementUpdateParamsReturnJsonDifferenceFormatEnum = {
    Default: 'default',
    FullPath: 'full_path',
    JsonPatch: 'json_patch'
} as const;
export type BTAppElementUpdateParamsReturnJsonDifferenceFormatEnum = typeof BTAppElementUpdateParamsReturnJsonDifferenceFormatEnum[keyof typeof BTAppElementUpdateParamsReturnJsonDifferenceFormatEnum];


/**
 * Check if a given object implements the BTAppElementUpdateParams interface.
 */
export function instanceOfBTAppElementUpdateParams(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTAppElementUpdateParamsFromJSON(json: any): BTAppElementUpdateParams {
    return BTAppElementUpdateParamsFromJSONTyped(json, false);
}

export function BTAppElementUpdateParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTAppElementUpdateParams {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'changes': !exists(json, 'changes') ? undefined : ((json['changes'] as Array<any>).map(BTAppElementChangeParamsFromJSON)),
        'description': !exists(json, 'description') ? undefined : json['description'],
        'jsonPatch': !exists(json, 'jsonPatch') ? undefined : json['jsonPatch'],
        'jsonTreeEdit': !exists(json, 'jsonTreeEdit') ? undefined : BTJEdit3734FromJSON(json['jsonTreeEdit']),
        'parentChangeId': !exists(json, 'parentChangeId') ? undefined : json['parentChangeId'],
        'propertyUpdates': !exists(json, 'propertyUpdates') ? undefined : ((json['propertyUpdates'] as Array<any>).map(BTMetadataPropertyUpdateParamsFromJSON)),
        'returnError': !exists(json, 'returnError') ? undefined : json['returnError'],
        'returnJsonDifferenceFormat': !exists(json, 'returnJsonDifferenceFormat') ? undefined : json['returnJsonDifferenceFormat'],
        'transactionId': !exists(json, 'transactionId') ? undefined : json['transactionId'],
    };
}

export function BTAppElementUpdateParamsToJSON(value?: BTAppElementUpdateParams | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'changes': value.changes === undefined ? undefined : ((value.changes as Array<any>).map(BTAppElementChangeParamsToJSON)),
        'description': value.description,
        'jsonPatch': value.jsonPatch,
        'jsonTreeEdit': BTJEdit3734ToJSON(value.jsonTreeEdit),
        'parentChangeId': value.parentChangeId,
        'propertyUpdates': value.propertyUpdates === undefined ? undefined : ((value.propertyUpdates as Array<any>).map(BTMetadataPropertyUpdateParamsToJSON)),
        'returnError': value.returnError,
        'returnJsonDifferenceFormat': value.returnJsonDifferenceFormat,
        'transactionId': value.transactionId,
    };
}

