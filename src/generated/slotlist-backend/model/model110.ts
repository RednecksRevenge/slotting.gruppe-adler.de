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


export interface Model110 {
    /**
     * HTTP status code caused by the error
     */
    statusCode: number;
    /**
     * HTTP status code text respresentation
     */
    error: Model110.ErrorEnum;
    /**
     * Message further describing the error
     */
    message: Model110.MessageEnum;
}
export namespace Model110 {
    export type ErrorEnum = 'Bad Request';
    export const ErrorEnum = {
        Request: 'Bad Request' as ErrorEnum
    }
    export type MessageEnum = 'Missing mission banner image data';
    export const MessageEnum = {
        Data: 'Missing mission banner image data' as MessageEnum
    }
}