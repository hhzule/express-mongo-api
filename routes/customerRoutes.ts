import { Express, Request, Response } from 'express'
import CustomerController from '../src/controller/customer.controller'

function customerRoutes(app: Express) {
    /**
      * @openapi
      * tags:
      *   - name: dealers
      *     description: CRUD about your dealers
      *   - name: store
      *     description: Access to Petstore orders
      *   - name: user
      *     description: Operations about user
      * 
      * /healthcheck:
      *  get:
      *     tags:
      *     - Healthcheck
      *     summary: summary
      *     description: Responds if the app is up and running
      *     responses:
      *       200:
      *         description: App is up and running
      */
    app.get('/healthcheckcustomer', (req: Request, res: Response) => {
        res.sendStatus(200)
    })
    /**
  * @openapi
  * '/api/users':
  *  post:
  *     tags:
  *     - User
  *     summary: Register a user
  *     description: Update an existing pet by Id
  *     requestBody:
  *      description: Update an existing pet by Id    
  *      required: true
  *      content:
  *        application/json:
  *           schema:
  *              $ref: '#/components/schemas/CreateUserInput'
  *     responses:
  *      200:
  *        description: Success
  *        content:
  *          application/json:
  *            schema:
  *              $ref: '#/components/schemas/CreateUserResponse'
  *      409:
  *        description: Conflict
  *      400:
  *        description: Bad request
  */
    app.post('/createcustomer', CustomerController.createCustomerHandler)
    app.post('/updatecustomer', CustomerController.updateCustomerHandler)
    app.post('/deletecustomer', CustomerController.deleteCustomerHandler)
    app.get('/getcustomers', CustomerController.getAllCustomersHandler)
}

export default customerRoutes