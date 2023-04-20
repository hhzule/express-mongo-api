
/**
 * @openapi
 * components:
 *  schemas:
 *    AdjustCommissionInput:
 *      type: object
 *      required:
 *        - auth  
 *        - commision
 *      properties:
 *        auth:
 *          type: string
 *          default: Admin id
 *        commision:
 *          type: number
 *          default: 5
 *    AdjustCommissionResponse:
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
 *    CreateAdminInput:
 *      type: object
 *      required:
 *        - email
 *        - name
 *        - password  
 *        - commission  
 *      properties:
 *        email:
 *          type: string
 *          default: jane.doe@example.com
 *        name:
 *          type: string
 *          default: Jane Doe
 *        commission:
 *          type: number
 *          default: 5  
 *    CreateAdminResponse:
 *      type: object
 *      properties:
 *        email:
 *          type: string
 *        name:
 *          type: string
 *        _id:
 *          type: string
 *        commission:
 *          type: number  
 *        createdAt:
 *          type: string
 *        updatedAt:
 *          type: string
 *    GetAdminResponse:
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
 *            type: number  
 *          createdAt:
 *            type: string
 *          updatedAt:
 *            type: string
 *    UpdateAdminInput:
 *      type: object
 *      required:
 *        - email
 *        - name
 *        - password
 *        - auth
 *        - commission  
 *      properties:
 *        email:
 *          type: string
 *          default: jane.doe@example.com
 *        name:
 *          type: string
 *          default: Jane Doe
 *        auth:
 *          type: string
 *          default: "12345"  
 *        commision:
 *          type: number
 *          default: 5
 */ 