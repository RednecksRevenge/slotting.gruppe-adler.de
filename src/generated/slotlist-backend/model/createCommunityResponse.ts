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
import { CommunityDetails } from './communityDetails';


/**
 * Response containing details of newly created community
 */
export interface CreateCommunityResponse {
    community?: CommunityDetails;
    /**
     * Refreshed JWT including updated permissions
     */
    token: string;
}
