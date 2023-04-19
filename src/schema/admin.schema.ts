
/**
 * @openapi
 * components:
 *  schemas:
 *    AdjustCommissionInput:
 *      type: object
 *      required:
 *        - _id
 *        - auth  
 *        - name
 *        - commision
 *        - userType  
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
 *        name:
 *          type: string
 *          default: "customerName"  
 *        userType:
 *          type: string
 *          enum:
 *            - customer
 *            - dealer    
 *          default: "customer or dealer"  
 *    AdjustCommissionResponse:
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
 *    CreateAdminInput:
 *      type: object
 *      required:
 *        - email
 *        - name
 *        - password  
 *      properties:
 *        email:
 *          type: string
 *          default: jane.doe@example.com
 *        name:
 *          type: string
 *          default: Jane Doe
 *        password:
 *          type: string
 *          default: Janepassword
 *    CreateAdminResponse:
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
 *      properties:
 *        email:
 *          type: string
 *          default: jane.doe@example.com
 *        name:
 *          type: string
 *          default: Jane Doe
 *        password:
 *          type: string
 *          default: adminPassword123
 *        auth:
 *          type: string
 *          default: "12345"  
 */ 