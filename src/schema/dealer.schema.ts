
/**
 * @openapi
 * components:
 *  schemas:
 *    CreateDealerInput:
 *      type: object
 *      required:
 *        - email
 *        - name
 *        - auth  
 *        - password  
 *      properties:
 *        email:
 *          type: string
 *          default: jane.doe@example.com
 *        name:
 *          type: string
 *          default: Jane Doe
 *        auth:
 *          type: string  
 *        password:
 *          type: string
 *          default: "pass"  
 *    CreateDealerResponse: 
 *      type: object
 *      properties:
 *        email:
 *          type: string
 *        name:
 *          type: string
 *        _id:
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
 *          createdAt:
 *            type: string
 *          updatedAt:
 *            type: string
 *    UpdateDealerInput:
 *      type: object
 *      required:
 *        - email
 *        - name
 *        - _id  
 *        - auth   
 *      properties:
 *        email:
 *          type: string
 *          default: jane.doe@example.com
 *        name:
 *          type: string
 *          default: Jane Doe
 *        _id:
 *          type: string
 *          default: "12345"   
 *        auth:
 *          type: string
 */
