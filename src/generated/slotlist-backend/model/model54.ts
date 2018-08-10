/**
 * slotlist.info API Documentation
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0-beta32
 * Contact: nick@slotlist.info
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


export interface Model54 {
    /**
     * HTTP status code caused by the error
     */
    statusCode: number;
    /**
     * HTTP status code text respresentation
     */
    error: Model54.ErrorEnum;
    /**
     * Message further describing the error
     */
    message: Model54.MessageEnum;
}
export namespace Model54 {
    export type ErrorEnum = 'Bad Request';
    export const ErrorEnum = {
        Request: 'Bad Request' as ErrorEnum
    }
    export type MessageEnum = 'Invalid mission permission';
    export const MessageEnum = {
        Permission: 'Invalid mission permission' as MessageEnum
    }
}