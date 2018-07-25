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


export interface Model64 {
    /**
     * Title of the slot group
     */
    title: string;
    /**
     * Optional description of the mission slot group, explaining the slot group's role or callsign
     */
    description: string;
    /**
     * Order number of slot group the new group should be inserted after. The order number created will be incremented by one and all higher order numbers adapted accordingly
     */
    insertAfter: number;
}
