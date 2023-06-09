
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
 *        - imgUrl  
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
 *        imgUrl:
 *          type: string
 *          default: watch.png  
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
 *        imgUrl:
 *          type: string
 *          default: watch.png  
 *        _id:
 *          type: string
 *        createdAt:
 *          type: string
 *        updatedAt:
 *          type: string
 *    GetWatchesResponse:
 *      type: array
 *      items:
 *        type: object
 *        properties:
 *          model:
 *            type: string
 *          name:
 *            type: string
 *          _id:
 *            type: string
 *          owner:
 *            type: string
 *          price:
 *            type: string  
 *          status:
 *            type: string  
 *          imgUrl:
 *            type: string
 *          createdAt:
 *            type: string
 *          updatedAt:
 *            type: string
 *    UpdateWatchInput:
 *      type: object
 *      required:
 *        - name
 *        - model
 *        - owner
 *        - price
 *        - status 
 *        - imgUrl  
 *        - _id  
 *      properties:
 *        model:
 *          type: string
 *          default: ER-43
 *        name:
 *          type: string
 *          default: Rolex
 *        owner:
 *          type: string
 *          default: Jhon
 *        _id:
 *          type: string
 *          default: "12345" 
 *        price:
 *          type: number
 *          default: 3000   
 *        status:
 *          type: string
 *        imgUrl:
 *          type: string
 *          default: watch.png  
 *
 */
