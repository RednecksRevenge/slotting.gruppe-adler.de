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
import { Community } from './community';


/**
 * User the slot has been assigned to. Can be `null` if no final assignment has been completed yet
 */
export interface Model30 {
    /**
     * UID of the user
     */
    uid: string;
    /**
     * Nickname of the user (not guaranteed to be unique, can be freely changed)
     */
    nickname: string;
    community?: Community;
    /**
     * Steam ID of the user. Only returned for admins with the user admin permission
     */
    steamId?: string;
    /**
     * Indicates whether the user account is active and thus useable. Only returned for admins with the user admin permission
     */
    active?: boolean;
}
