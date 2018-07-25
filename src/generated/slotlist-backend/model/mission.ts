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
import { Model1 } from './model1';
import { RequiredDLCs } from './requiredDLCs';
import { SlotCounts } from './slotCounts';


/**
 * Public mission information, as displayed in overview lists
 */
export interface Mission {
    /**
     * Title of the mission
     */
    title: string;
    /**
     * Slug used for uniquely identifying a mission in the frontend, easier to read than a UUID
     */
    slug: string;
    /**
     * Date and time the missions starts (slotting/briefing times are stored separately and available via mission details
     */
    startTime: string;
    /**
     * Estimated date and time the missions ends, in UTC. Must be equal to or after `startTime`, just an estimation by the mission creator. The actual end time might vary
     */
    endTime: string;
    creator: Model1;
    slotCounts: SlotCounts;
    requiredDLCs: RequiredDLCs;
    /**
     * Indicates whether the user is assigned to any slot in the mission. Only present for requests by authenticated users
     */
    isAssignedToAnySlot?: boolean;
    /**
     * Indicates whether the user is registered for any slot in the mission. Only present for requests by authenticated users
     */
    isRegisteredForAnySlot?: boolean;
}
