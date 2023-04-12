"use strict";
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
 */
