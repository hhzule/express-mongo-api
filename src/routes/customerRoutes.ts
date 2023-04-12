import { Express, Request, Response } from 'express'
import CustomerController from '../controller/customer.controller'

function customerRoutes(app: Express) {
  /**
    * @openapi
    * tags:
    *   - name: create customer
    *     description: customer created
    *   - name: update customer
    *     description: customer updated
    *   - name: delete customer
    *     description: delete customer
    *   - name: get customers
    *     description: get customers list
    *   - name: get customer by id
    *     description: get customer by _id
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
   * '/customer':
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

  app.post('/customer', CustomerController.createCustomerHandler)

  /**
   * @openapi
   * '/customer':
   *  put:
   *     tags:
   *     - update customer
   *     summary: Update a customer
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *             $ref: '#/components/schemas/UpdateCustomerInput'
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

  app.put('/customer', CustomerController.updateCustomerHandler)

  /**
   * @openapi
   * '/customer':
   *  delete:
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
   *        description: customer deleted 
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   */

  app.delete('/customer', CustomerController.deleteCustomerHandler)
  /**
   * @openapi
   * '/customers':
   *  get:
   *     tags:
   *     - get customers
   *     summary: Get all customers
   *     responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/GetCustomersResponse'
   *      
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   */
  app.get('/customers', CustomerController.getAllCustomersHandler)
  /**
   * @openapi
   * '/customer':
   *  get:
   *     tags:
   *     - get customer by id
   *     summary: Get a customer
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
   *              $ref: '#/components/schemas/CreateCustomerResponse'
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   */
  app.get('/customer', CustomerController.getCustomerByIdHandler)
}

export default customerRoutes