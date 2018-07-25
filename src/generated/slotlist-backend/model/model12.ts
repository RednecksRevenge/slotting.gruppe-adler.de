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


export interface Model12 {
    /**
     * HTTP status code caused by the error
     */
    statusCode: number;
    /**
     * HTTP status code text respresentation
     */
    error: Model12.ErrorEnum;
    /**
     * Message further describing the error
     */
    message: Model12.MessageEnum;
}
export namespace Model12 {
    export type ErrorEnum = 'Not Found';
    export const ErrorEnum = {
        Found: 'Not Found' as ErrorEnum
    }
    export type MessageEnum = 'Mission not found';
    export const MessageEnum = {
        Found: 'Mission not found' as MessageEnum
    }
}
