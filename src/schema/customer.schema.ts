
/**
 * @openapi
 * components:
 *  schemas:
 *    CreateCustomerInput:
 *      type: object
 *      required:
 *        - email
 *        - name
 *        - commision
 *      properties:
 *        email:
 *          type: string
 *          default: jane.doe@example.com
 *        name:
 *          type: string
 *          default: Jane Doe
 *        commision:
 *          type: number
 *          default: 5
 *    CreateCustomerResponse:
 *      type: object
 *      properties:
 *        email:
 *          type: string
 *        name:
 *          type: string
 *        _id:
 *          type: string
 *        commission:
 *          type: string
 *        createdAt:
 *          type: string
 *        updatedAt:
 *          type: string
 */
