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
import { Users } from './users';


/**
 * Response containing list of currently existing users
 */
export interface GetUserListResponse {
    /**
     * Limit for number of users to retrieve, as provided via query
     */
    limit: number;
    /**
     * Number of users to skip before retrieving new ones from database, as provided via query
     */
    offset: number;
    /**
     * Actual number of users returned
     */
    count: number;
    /**
     * Total number of users stored
     */
    total: number;
    /**
     * Indicates whether more users are available and can be retrieved using pagination
     */
    moreAvailable: boolean;
    users: Users;
}
