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
import { Notifications } from './notifications';


/**
 * Response containing list of notifications
 */
export interface GetNotificationListResponse {
    /**
     * Limit for number of notifications to retrieve, as provided via query. Only present if query with `includeSeen` was executed
     */
    limit?: number;
    /**
     * Number of notifications to skip before retrieving new ones from database, as provided via query. Only present if query with `includeSeen` was executed
     */
    offset?: number;
    /**
     * Actual number of notifications returned. Only present if query with `includeSeen` was executed
     */
    count?: number;
    /**
     * Total number of notifications stored. Only present if query with `includeSeen` was executed
     */
    total?: number;
    /**
     * Indicates whether more notifications are available and can be retrieved using pagination. Only present if query with `includeSeen` was executed
     */
    moreAvailable?: boolean;
    notifications: Notifications;
}