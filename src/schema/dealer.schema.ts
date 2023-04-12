
/**
 * @openapi
 * components:
 *  schemas:
 *    CreateDealerInput:
 *      type: object
 *      required:
 *        - email
 *        - name
 *        - company
 *        - commision
 *        - auth  
 *      properties:
 *        email:
 *          type: string
 *          default: jane.doe@example.com
 *        name:
 *          type: string
 *          default: Jane Doe
 *        company:
 *          type: string
 *          default: ABC company
 *        commision:
 *          type: number
 *          default: 5
 *        auth:
 *          type: string  
 *    CreateDealerResponse: 
 *      type: object
 *      properties:
 *        email:
 *          type: string
 *        name:
 *          type: string
 *        _id:
 *          type: string
 *        company:
 *          type: string
 *        commission:
 *          type: string
 *        createdAt:
 *          type: string
 *        updatedAt:
 *          type: string
 *    GetDealersResponse:
 *      type: array
 *      items:
 *        type: object
 *        properties:
 *          email:
 *            type: string
 *          name:
 *            type: string
 *          _id:
 *            type: string
 *          commission:
 *            type: string
 *          company:
 *            type: string  
 *          createdAt:
 *            type: string
 *          updatedAt:
 *            type: string
 *    UpdateDealerInput:
 *      type: object
 *      required:
 *        - email
 *        - name
 *        - commision
 *        - _id  
 *        - company 
 *        - auth   
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
 *        _id:
 *          type: string
 *          default: "12345" 
 *        company:
 *          type: string
 *          default: "ABC company"   
 *        auth:
 *          type: string
 */
