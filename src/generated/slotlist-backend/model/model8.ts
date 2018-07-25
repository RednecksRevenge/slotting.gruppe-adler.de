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


export interface Model8 {
    /**
     * HTTP status code caused by the error
     */
    statusCode: number;
    /**
     * HTTP status code text respresentation
     */
    error: Model8.ErrorEnum;
    /**
     * Message further describing the error
     */
    message: Model8.MessageEnum;
}
export namespace Model8 {
    export type ErrorEnum = 'Not Found';
    export const ErrorEnum = {
        Found: 'Not Found' as ErrorEnum
    }
    export type MessageEnum = 'Community not found';
    export const MessageEnum = {
        Found: 'Community not found' as MessageEnum
    }
}
