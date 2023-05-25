/**
 * @openapi
 * components:
 *  schemas:
 *    TransactionInput:
 *      type: object
 *      required:
 *        - tokenId
 *        - hash
 *        - time
 *        - from
 *        - to
 *      properties:
 *        tokenId:
 *          type: number
 *          example: 12345
 *        hash:
 *          type: string
 *          example: "0xabc123"
 *        time:
 *          type: string
 *          format: date-time
 *          example: "2023-05-25T12:34:56Z"
 *        from:
 *          type: string
 *          example: "0xdef456"
 *        to:
 *          type: string
 *          example: "0x789ghi"
 *
 *    TransactionDocument:
 *      allOf:
 *        - $ref: '#/components/schemas/TransactionInput'
 *        - type: object
 *          properties:
 *            createdAt:
 *              type: string
 *              format: date-time
 *              example: "2023-05-25T12:34:56Z"
 *            updatedAt:
 *              type: string
 *              format: date-time
 *              example: "2023-05-25T12:34:56Z"
 */
