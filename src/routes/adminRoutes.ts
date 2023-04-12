import { Express, Request, Response } from 'express'
import AdminController from '../controller/admin.controller'


function adminRoutes(app: Express) {

  /**
   * @openapi
   * '/adjustcommision':
   *  post:
   *     tags:
   *     - comission adjustment by admin
   *     summary: Register a customer
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *             $ref: '#/components/schemas/AdjustComissionInput'
   *     responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/CreateCustomerResponse'
   *      409:
   *        description: Conflict
   *      400:
   *        description: unauthorised
   */
  app.post('/adjustcommision', AdminController.adjustCommisionHandler)
}

export default adminRoutes