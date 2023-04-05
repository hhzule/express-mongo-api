import { Express, Request, Response } from 'express'
import CustomerController from '../controller/customer.controller'

function customerRoutes(app: Express) {
  /**
    * @openapi
    * tags:
    *   - name: create customer
    *     description: customer created by admin
    *   - name: update customer
    *     description: customer updated by admin
    *   - name: delete customer
    *     description: delete customer by admin
    * 
    * /healthcheckcustomer:
    *  get:
    *     tags:
    *     - Healthcheck of customer api
    *     summary: summary
    *     description: Responds if the app is up and running
    *     responses:
    *       200:
    *         description: App is up and running
    */
  app.get('/healthcheck', (req: Request, res: Response) => {
    res.sendStatus(200)
  })
  /**
   * @openapi
   * '/createcustomer':
   *  post:
   *     tags:
   *     - create customer
   *     summary: Register a customer
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *             $ref: '#/components/schemas/CreateCustomerInput'
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
   *        description: Bad request
   */

  app.post('/createcustomer', CustomerController.createCustomerHandler)

  /**
   * @openapi
   * '/updatecustomer':
   *  post:
   *     tags:
   *     - update customer
   *     summary: Update a customer
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *             $ref: '#/components/schemas/CreateCustomerInput'
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
   *        description: Bad request
   */

  app.post('/updatecustomer', CustomerController.updateCustomerHandler)

  /**
   * @openapi
   * '/deletecustomer':
   *  post:
   *     tags:
   *     - delete customer
   *     summary: Delete a customer
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *             type: object
   *             required:
   *               - _id
   *             properties:
   *               _id:
   *                 type: string
   *     responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              type: customer deleted
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   */

  app.post('/deletecustomer', CustomerController.deleteCustomerHandler)
  app.get('/getcustomers', CustomerController.getAllCustomersHandler)
}

export default customerRoutes