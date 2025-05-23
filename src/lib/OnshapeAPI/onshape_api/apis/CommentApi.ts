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


import * as runtime from '../runtime';
import type {
  BTCommentInfo,
  BTCommentParams,
  BTListResponseBTCommentInfo,
} from '../models';
import {
    BTCommentInfoFromJSON,
    BTCommentInfoToJSON,
    BTCommentParamsFromJSON,
    BTCommentParamsToJSON,
    BTListResponseBTCommentInfoFromJSON,
    BTListResponseBTCommentInfoToJSON,
} from '../models';

export interface AddAttachmentRequest {
    cid: string;
    file: object;
}

export interface CreateCommentRequest {
    bTCommentParams: BTCommentParams;
}

export interface DeleteAttachmentsRequest {
    cid: string;
}

export interface DeleteCommentRequest {
    cid: string;
}

export interface GetAttachmentRequest {
    cid: string;
    fdid: string;
    ext: string;
}

export interface GetCommentRequest {
    cid: string;
}

export interface GetCommentsRequest {
    did?: string;
    objectType?: number;
    pid?: string;
    eid?: string;
    filter?: number;
    resolved?: boolean;
    offset?: number;
    limit?: number;
}

export interface ReopenRequest {
    cid: string;
}

export interface ResolveRequest {
    cid: string;
}

export interface UpdateCommentRequest {
    cid: string;
    bTCommentParams: BTCommentParams;
}

/**
 * 
 */
export class CommentApi extends runtime.BaseAPI {

    /**
     * Update a user’s comment by comment ID.
     */
    async addAttachmentRaw(requestParameters: AddAttachmentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTCommentInfo>> {
        if (requestParameters.cid === null || requestParameters.cid === undefined) {
            throw new runtime.RequiredError('cid','Required parameter requestParameters.cid was null or undefined when calling addAttachment.');
        }

        if (requestParameters.file === null || requestParameters.file === undefined) {
            throw new runtime.RequiredError('file','Required parameter requestParameters.file was null or undefined when calling addAttachment.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["OAuth2Write"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const consumes: runtime.Consume[] = [
            { contentType: 'multipart/form-data' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters.file !== undefined) {
            formParams.append('file', new Blob([JSON.stringify(objectToJSON(requestParameters.file))], { type: "application/json", }));
                    }

        const response = await this.request({
            path: `/comments/{cid}/attachment`.replace(`{${"cid"}}`, encodeURIComponent(String(requestParameters.cid))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTCommentInfoFromJSON(jsonValue));
    }

    /**
     * Update a user’s comment by comment ID.
     */
    async addAttachment(requestParameters: AddAttachmentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTCommentInfo> {
        const response = await this.addAttachmentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a document with a new comment.
     */
    async createCommentRaw(requestParameters: CreateCommentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTCommentInfo>> {
        if (requestParameters.bTCommentParams === null || requestParameters.bTCommentParams === undefined) {
            throw new runtime.RequiredError('bTCommentParams','Required parameter requestParameters.bTCommentParams was null or undefined when calling createComment.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json;charset=UTF-8; qs=0.09';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["OAuth2Read"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/comments`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BTCommentParamsToJSON(requestParameters.bTCommentParams),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTCommentInfoFromJSON(jsonValue));
    }

    /**
     * Update a document with a new comment.
     */
    async createComment(requestParameters: CreateCommentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTCommentInfo> {
        const response = await this.createCommentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete an attachment from a comment by comment ID.
     */
    async deleteAttachmentsRaw(requestParameters: DeleteAttachmentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.cid === null || requestParameters.cid === undefined) {
            throw new runtime.RequiredError('cid','Required parameter requestParameters.cid was null or undefined when calling deleteAttachments.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["OAuth2Delete"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/comments/{cid}/attachment`.replace(`{${"cid"}}`, encodeURIComponent(String(requestParameters.cid))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Delete an attachment from a comment by comment ID.
     */
    async deleteAttachments(requestParameters: DeleteAttachmentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.deleteAttachmentsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete a comment by comment ID.
     */
    async deleteCommentRaw(requestParameters: DeleteCommentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.cid === null || requestParameters.cid === undefined) {
            throw new runtime.RequiredError('cid','Required parameter requestParameters.cid was null or undefined when calling deleteComment.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["OAuth2Delete"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/comments/{cid}`.replace(`{${"cid"}}`, encodeURIComponent(String(requestParameters.cid))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Delete a comment by comment ID.
     */
    async deleteComment(requestParameters: DeleteCommentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.deleteCommentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve an attachment associated with a comment by comment ID and file document ID (and extension).
     */
    async getAttachmentRaw(requestParameters: GetAttachmentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.cid === null || requestParameters.cid === undefined) {
            throw new runtime.RequiredError('cid','Required parameter requestParameters.cid was null or undefined when calling getAttachment.');
        }

        if (requestParameters.fdid === null || requestParameters.fdid === undefined) {
            throw new runtime.RequiredError('fdid','Required parameter requestParameters.fdid was null or undefined when calling getAttachment.');
        }

        if (requestParameters.ext === null || requestParameters.ext === undefined) {
            throw new runtime.RequiredError('ext','Required parameter requestParameters.ext was null or undefined when calling getAttachment.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["OAuth2Read"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/comments/{cid}/attachment/{fdid}.{ext}`.replace(`{${"cid"}}`, encodeURIComponent(String(requestParameters.cid))).replace(`{${"fdid"}}`, encodeURIComponent(String(requestParameters.fdid))).replace(`{${"ext"}}`, encodeURIComponent(String(requestParameters.ext))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Retrieve an attachment associated with a comment by comment ID and file document ID (and extension).
     */
    async getAttachment(requestParameters: GetAttachmentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.getAttachmentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve details for a comment by comment ID.
     */
    async getCommentRaw(requestParameters: GetCommentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTCommentInfo>> {
        if (requestParameters.cid === null || requestParameters.cid === undefined) {
            throw new runtime.RequiredError('cid','Required parameter requestParameters.cid was null or undefined when calling getComment.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["OAuth2Read"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/comments/{cid}`.replace(`{${"cid"}}`, encodeURIComponent(String(requestParameters.cid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTCommentInfoFromJSON(jsonValue));
    }

    /**
     * Retrieve details for a comment by comment ID.
     */
    async getComment(requestParameters: GetCommentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTCommentInfo> {
        const response = await this.getCommentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a list of comments for a document.
     */
    async getCommentsRaw(requestParameters: GetCommentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTListResponseBTCommentInfo>> {
        const queryParameters: any = {};

        if (requestParameters.did !== undefined) {
            queryParameters['did'] = requestParameters.did;
        }

        if (requestParameters.objectType !== undefined) {
            queryParameters['objectType'] = requestParameters.objectType;
        }

        if (requestParameters.pid !== undefined) {
            queryParameters['pid'] = requestParameters.pid;
        }

        if (requestParameters.eid !== undefined) {
            queryParameters['eid'] = requestParameters.eid;
        }

        if (requestParameters.filter !== undefined) {
            queryParameters['filter'] = requestParameters.filter;
        }

        if (requestParameters.resolved !== undefined) {
            queryParameters['resolved'] = requestParameters.resolved;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["OAuth2Read"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/comments`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTListResponseBTCommentInfoFromJSON(jsonValue));
    }

    /**
     * Retrieve a list of comments for a document.
     */
    async getComments(requestParameters: GetCommentsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTListResponseBTCommentInfo> {
        const response = await this.getCommentsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Reopen a resolved comment by comment ID.
     */
    async reopenRaw(requestParameters: ReopenRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTCommentInfo>> {
        if (requestParameters.cid === null || requestParameters.cid === undefined) {
            throw new runtime.RequiredError('cid','Required parameter requestParameters.cid was null or undefined when calling reopen.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["OAuth2Write"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/comments/{cid}/reopen`.replace(`{${"cid"}}`, encodeURIComponent(String(requestParameters.cid))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTCommentInfoFromJSON(jsonValue));
    }

    /**
     * Reopen a resolved comment by comment ID.
     */
    async reopen(requestParameters: ReopenRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTCommentInfo> {
        const response = await this.reopenRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Resolve a comment by comment ID.
     */
    async resolveRaw(requestParameters: ResolveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTCommentInfo>> {
        if (requestParameters.cid === null || requestParameters.cid === undefined) {
            throw new runtime.RequiredError('cid','Required parameter requestParameters.cid was null or undefined when calling resolve.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["OAuth2Write"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/comments/{cid}/resolve`.replace(`{${"cid"}}`, encodeURIComponent(String(requestParameters.cid))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTCommentInfoFromJSON(jsonValue));
    }

    /**
     * Resolve a comment by comment ID.
     */
    async resolve(requestParameters: ResolveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTCommentInfo> {
        const response = await this.resolveRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a user’s comment by comment ID.
     */
    async updateCommentRaw(requestParameters: UpdateCommentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTCommentInfo>> {
        if (requestParameters.cid === null || requestParameters.cid === undefined) {
            throw new runtime.RequiredError('cid','Required parameter requestParameters.cid was null or undefined when calling updateComment.');
        }

        if (requestParameters.bTCommentParams === null || requestParameters.bTCommentParams === undefined) {
            throw new runtime.RequiredError('bTCommentParams','Required parameter requestParameters.bTCommentParams was null or undefined when calling updateComment.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json;charset=UTF-8; qs=0.09';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["OAuth2Write"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/comments/{cid}`.replace(`{${"cid"}}`, encodeURIComponent(String(requestParameters.cid))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BTCommentParamsToJSON(requestParameters.bTCommentParams),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTCommentInfoFromJSON(jsonValue));
    }

    /**
     * Update a user’s comment by comment ID.
     */
    async updateComment(requestParameters: UpdateCommentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTCommentInfo> {
        const response = await this.updateCommentRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
