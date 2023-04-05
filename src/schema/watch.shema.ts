
/**
 * @openapi
 * components:
 *  schemas:
 *    CreateWatchInput:
 *      type: object
 *      required:
 *        - name
 *        - model
 *        - owner
 *        - price
 *        - status
 *      properties:
 *        name:
 *          type: string
 *          default: Rolex 
 *        model:
 *          type: string
 *          default: WER_555
 *        owner:
 *          type: string
 *          default: Jhon D
 *        price:
 *          type: number
 *          default: 100
 *        status:
 *          type: string
 *          default: approval pending
 *    CreateWatchResponse:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *          default: Rolex 
 *        model:
 *          type: string
 *          default: WER_555
 *        owner:
 *          type: string
 *          default: Jhon D
 *        price:
 *          type: number
 *          default: 100
 *        status:
 *          type: string
 *          default: approval pend
 *        _id:
 *          type: string
 *        commission:
 *          type: string
 *        createdAt:
 *          type: string
 *        updatedAt:
 *          type: string
 */
