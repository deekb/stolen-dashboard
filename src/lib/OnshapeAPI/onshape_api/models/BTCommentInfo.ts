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
import type { BTCommentAttachmentInfo } from './BTCommentAttachmentInfo';
import {
    BTCommentAttachmentInfoFromJSON,
    BTCommentAttachmentInfoFromJSONTyped,
    BTCommentAttachmentInfoToJSON,
} from './BTCommentAttachmentInfo';
import type { BTUserSummaryInfo } from './BTUserSummaryInfo';
import {
    BTUserSummaryInfoFromJSON,
    BTUserSummaryInfoFromJSONTyped,
    BTUserSummaryInfoToJSON,
} from './BTUserSummaryInfo';
import type { BTViewDataInfo } from './BTViewDataInfo';
import {
    BTViewDataInfoFromJSON,
    BTViewDataInfoFromJSONTyped,
    BTViewDataInfoToJSON,
} from './BTViewDataInfo';

/**
 * 
 * @export
 * @interface BTCommentInfo
 */
export interface BTCommentInfo {
    /**
     * 
     * @type {Array<string>}
     * @memberof BTCommentInfo
     */
    assemblyFeatures?: Array<string>;
    /**
     * 
     * @type {Date}
     * @memberof BTCommentInfo
     */
    assignedAt?: Date;
    /**
     * 
     * @type {BTUserSummaryInfo}
     * @memberof BTCommentInfo
     */
    assignee?: BTUserSummaryInfo;
    /**
     * 
     * @type {BTCommentAttachmentInfo}
     * @memberof BTCommentInfo
     */
    attachment?: BTCommentAttachmentInfo;
    /**
     * 
     * @type {boolean}
     * @memberof BTCommentInfo
     */
    canDelete?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTCommentInfo
     */
    canResolveOrReopen?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof BTCommentInfo
     */
    createdAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof BTCommentInfo
     */
    documentId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTCommentInfo
     */
    elementFeature?: string;
    /**
     * 
     * @type {string}
     * @memberof BTCommentInfo
     */
    elementId?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTCommentInfo
     */
    elementOccurrences?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof BTCommentInfo
     */
    elementQuery?: string;
    /**
     * URI to fetch complete information of the resource.
     * @type {string}
     * @memberof BTCommentInfo
     */
    href?: string;
    /**
     * Id of the resource.
     * @type {string}
     * @memberof BTCommentInfo
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof BTCommentInfo
     */
    message?: string;
    /**
     * Name of the resource.
     * @type {string}
     * @memberof BTCommentInfo
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof BTCommentInfo
     */
    objectId?: string;
    /**
     * 
     * @type {number}
     * @memberof BTCommentInfo
     */
    objectType?: number;
    /**
     * 
     * @type {string}
     * @memberof BTCommentInfo
     */
    parentId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTCommentInfo
     */
    releasePackageId?: string;
    /**
     * 
     * @type {Date}
     * @memberof BTCommentInfo
     */
    reopenedAt?: Date;
    /**
     * 
     * @type {BTUserSummaryInfo}
     * @memberof BTCommentInfo
     */
    reopenedBy?: BTUserSummaryInfo;
    /**
     * 
     * @type {number}
     * @memberof BTCommentInfo
     */
    replyCount?: number;
    /**
     * 
     * @type {Date}
     * @memberof BTCommentInfo
     */
    resolvedAt?: Date;
    /**
     * 
     * @type {BTUserSummaryInfo}
     * @memberof BTCommentInfo
     */
    resolvedBy?: BTUserSummaryInfo;
    /**
     * 
     * @type {number}
     * @memberof BTCommentInfo
     */
    state?: number;
    /**
     * 
     * @type {BTCommentAttachmentInfo}
     * @memberof BTCommentInfo
     */
    thumbnail?: BTCommentAttachmentInfo;
    /**
     * 
     * @type {boolean}
     * @memberof BTCommentInfo
     */
    topLevel?: boolean;
    /**
     * 
     * @type {BTUserSummaryInfo}
     * @memberof BTCommentInfo
     */
    user?: BTUserSummaryInfo;
    /**
     * 
     * @type {string}
     * @memberof BTCommentInfo
     */
    versionId?: string;
    /**
     * 
     * @type {BTViewDataInfo}
     * @memberof BTCommentInfo
     */
    viewData?: BTViewDataInfo;
    /**
     * URI to visualize the resource in a webclient if applicable.
     * @type {string}
     * @memberof BTCommentInfo
     */
    viewRef?: string;
    /**
     * 
     * @type {string}
     * @memberof BTCommentInfo
     */
    workspaceId?: string;
}

/**
 * Check if a given object implements the BTCommentInfo interface.
 */
export function instanceOfBTCommentInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTCommentInfoFromJSON(json: any): BTCommentInfo {
    return BTCommentInfoFromJSONTyped(json, false);
}

export function BTCommentInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTCommentInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'assemblyFeatures': !exists(json, 'assemblyFeatures') ? undefined : json['assemblyFeatures'],
        'assignedAt': !exists(json, 'assignedAt') ? undefined : (new Date(json['assignedAt'])),
        'assignee': !exists(json, 'assignee') ? undefined : BTUserSummaryInfoFromJSON(json['assignee']),
        'attachment': !exists(json, 'attachment') ? undefined : BTCommentAttachmentInfoFromJSON(json['attachment']),
        'canDelete': !exists(json, 'canDelete') ? undefined : json['canDelete'],
        'canResolveOrReopen': !exists(json, 'canResolveOrReopen') ? undefined : json['canResolveOrReopen'],
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'documentId': !exists(json, 'documentId') ? undefined : json['documentId'],
        'elementFeature': !exists(json, 'elementFeature') ? undefined : json['elementFeature'],
        'elementId': !exists(json, 'elementId') ? undefined : json['elementId'],
        'elementOccurrences': !exists(json, 'elementOccurrences') ? undefined : json['elementOccurrences'],
        'elementQuery': !exists(json, 'elementQuery') ? undefined : json['elementQuery'],
        'href': !exists(json, 'href') ? undefined : json['href'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'objectId': !exists(json, 'objectId') ? undefined : json['objectId'],
        'objectType': !exists(json, 'objectType') ? undefined : json['objectType'],
        'parentId': !exists(json, 'parentId') ? undefined : json['parentId'],
        'releasePackageId': !exists(json, 'releasePackageId') ? undefined : json['releasePackageId'],
        'reopenedAt': !exists(json, 'reopenedAt') ? undefined : (new Date(json['reopenedAt'])),
        'reopenedBy': !exists(json, 'reopenedBy') ? undefined : BTUserSummaryInfoFromJSON(json['reopenedBy']),
        'replyCount': !exists(json, 'replyCount') ? undefined : json['replyCount'],
        'resolvedAt': !exists(json, 'resolvedAt') ? undefined : (new Date(json['resolvedAt'])),
        'resolvedBy': !exists(json, 'resolvedBy') ? undefined : BTUserSummaryInfoFromJSON(json['resolvedBy']),
        'state': !exists(json, 'state') ? undefined : json['state'],
        'thumbnail': !exists(json, 'thumbnail') ? undefined : BTCommentAttachmentInfoFromJSON(json['thumbnail']),
        'topLevel': !exists(json, 'topLevel') ? undefined : json['topLevel'],
        'user': !exists(json, 'user') ? undefined : BTUserSummaryInfoFromJSON(json['user']),
        'versionId': !exists(json, 'versionId') ? undefined : json['versionId'],
        'viewData': !exists(json, 'viewData') ? undefined : BTViewDataInfoFromJSON(json['viewData']),
        'viewRef': !exists(json, 'viewRef') ? undefined : json['viewRef'],
        'workspaceId': !exists(json, 'workspaceId') ? undefined : json['workspaceId'],
    };
}

export function BTCommentInfoToJSON(value?: BTCommentInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'assemblyFeatures': value.assemblyFeatures,
        'assignedAt': value.assignedAt === undefined ? undefined : (value.assignedAt.toISOString()),
        'assignee': BTUserSummaryInfoToJSON(value.assignee),
        'attachment': BTCommentAttachmentInfoToJSON(value.attachment),
        'canDelete': value.canDelete,
        'canResolveOrReopen': value.canResolveOrReopen,
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'documentId': value.documentId,
        'elementFeature': value.elementFeature,
        'elementId': value.elementId,
        'elementOccurrences': value.elementOccurrences,
        'elementQuery': value.elementQuery,
        'href': value.href,
        'id': value.id,
        'message': value.message,
        'name': value.name,
        'objectId': value.objectId,
        'objectType': value.objectType,
        'parentId': value.parentId,
        'releasePackageId': value.releasePackageId,
        'reopenedAt': value.reopenedAt === undefined ? undefined : (value.reopenedAt.toISOString()),
        'reopenedBy': BTUserSummaryInfoToJSON(value.reopenedBy),
        'replyCount': value.replyCount,
        'resolvedAt': value.resolvedAt === undefined ? undefined : (value.resolvedAt.toISOString()),
        'resolvedBy': BTUserSummaryInfoToJSON(value.resolvedBy),
        'state': value.state,
        'thumbnail': BTCommentAttachmentInfoToJSON(value.thumbnail),
        'topLevel': value.topLevel,
        'user': BTUserSummaryInfoToJSON(value.user),
        'versionId': value.versionId,
        'viewData': BTViewDataInfoToJSON(value.viewData),
        'viewRef': value.viewRef,
        'workspaceId': value.workspaceId,
    };
}

