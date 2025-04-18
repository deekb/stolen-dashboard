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
import type { BTMParameter1 } from './BTMParameter1';
import {
    BTMParameter1FromJSON,
    BTMParameter1FromJSONTyped,
    BTMParameter1ToJSON,
} from './BTMParameter1';

import {
     BTMAssemblyFeature887FromJSONTyped,
     BTMFeatureInvalid1031FromJSONTyped,
     BTMSketch151FromJSONTyped,
     BTMVariableStudioReference2764FromJSONTyped
} from './index';

/**
 * 
 * @export
 * @interface BTMFeature134
 */
export interface BTMFeature134 {
    /**
     * 
     * @type {string}
     * @memberof BTMFeature134
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMFeature134
     */
    featureId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMFeature134
     */
    featureType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMFeature134
     */
    importMicroversion?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMFeature134
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMFeature134
     */
    namespace?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMFeature134
     */
    nodeId?: string;
    /**
     * 
     * @type {Array<BTMParameter1>}
     * @memberof BTMFeature134
     */
    parameters?: Array<BTMParameter1>;
    /**
     * 
     * @type {boolean}
     * @memberof BTMFeature134
     */
    returnAfterSubfeatures?: boolean;
    /**
     * 
     * @type {Array<BTMFeature134>}
     * @memberof BTMFeature134
     */
    subFeatures?: Array<BTMFeature134>;
    /**
     * 
     * @type {boolean}
     * @memberof BTMFeature134
     */
    suppressed?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTMFeature134
     */
    suppressionConfigured?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTMFeature134
     */
    variableStudioReference?: boolean;
}

/**
 * Check if a given object implements the BTMFeature134 interface.
 */
export function instanceOfBTMFeature134(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMFeature134FromJSON(json: any): BTMFeature134 {
    return BTMFeature134FromJSONTyped(json, false);
}

export function BTMFeature134FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMFeature134 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTMAssemblyFeature-887') {
            return BTMAssemblyFeature887FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMFeatureInvalid-1031') {
            return BTMFeatureInvalid1031FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMSketch-151') {
            return BTMSketch151FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMVariableStudioReference-2764') {
            return BTMVariableStudioReference2764FromJSONTyped(json, true);
        }
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'featureId': !exists(json, 'featureId') ? undefined : json['featureId'],
        'featureType': !exists(json, 'featureType') ? undefined : json['featureType'],
        'importMicroversion': !exists(json, 'importMicroversion') ? undefined : json['importMicroversion'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'namespace': !exists(json, 'namespace') ? undefined : json['namespace'],
        'nodeId': !exists(json, 'nodeId') ? undefined : json['nodeId'],
        'parameters': !exists(json, 'parameters') ? undefined : ((json['parameters'] as Array<any>).map(BTMParameter1FromJSON)),
        'returnAfterSubfeatures': !exists(json, 'returnAfterSubfeatures') ? undefined : json['returnAfterSubfeatures'],
        'subFeatures': !exists(json, 'subFeatures') ? undefined : ((json['subFeatures'] as Array<any>).map(BTMFeature134FromJSON)),
        'suppressed': !exists(json, 'suppressed') ? undefined : json['suppressed'],
        'suppressionConfigured': !exists(json, 'suppressionConfigured') ? undefined : json['suppressionConfigured'],
        'variableStudioReference': !exists(json, 'variableStudioReference') ? undefined : json['variableStudioReference'],
    };
}

export function BTMFeature134ToJSON(value?: BTMFeature134 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'featureId': value.featureId,
        'featureType': value.featureType,
        'importMicroversion': value.importMicroversion,
        'name': value.name,
        'namespace': value.namespace,
        'nodeId': value.nodeId,
        'parameters': value.parameters === undefined ? undefined : ((value.parameters as Array<any>).map(BTMParameter1ToJSON)),
        'returnAfterSubfeatures': value.returnAfterSubfeatures,
        'subFeatures': value.subFeatures === undefined ? undefined : ((value.subFeatures as Array<any>).map(BTMFeature134ToJSON)),
        'suppressed': value.suppressed,
        'suppressionConfigured': value.suppressionConfigured,
        'variableStudioReference': value.variableStudioReference,
    };
}

