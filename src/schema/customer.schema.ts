
/**
 * @openapi
 * components:
 *  schemas:
 *    CreateCustomerInput:
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
 *    GetCustomersResponse:
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
 *          createdAt:
 *            type: string
 *          updatedAt:
 *            type: string
 *    UpdateCustomerInput:
 *      type: object
 *      required:
 *        - email
 *        - name
 *        - password  
 *        - commision
 *        - _id  
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
 */ 