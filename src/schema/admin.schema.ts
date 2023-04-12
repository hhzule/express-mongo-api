
/**
 * @openapi
 * components:
 *  schemas:
 *    AdjustComissionInput:
 *      type: object
 *      required:
 *        - _id
 *        - auth  
 *        - name
 *        - commision
 *      properties:
 *        auth:
 *          type: string
 *          default: Admin id
 *        _id:
 *          type: string
 *          default: _id of customer/dealer
 *        commision:
 *          type: number
 *          default: 5
 *    AdjustComissionResponse:
 *      type: object
 *      properties:
 *        _id:
 *          type: string
 *        commission:
 *          type: string
 *        createdAt:
 *          type: string
 *        updatedAt:
 *          type: string
 */