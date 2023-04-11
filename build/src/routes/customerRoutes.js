"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const customer_controller_1 = __importDefault(require("../controller/customer.controller"));
function customerRoutes(app) {
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
    app.get('/healthcheck', (req, res) => {
        res.sendStatus(200);
    });
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
    app.post('/createcustomer', customer_controller_1.default.createCustomerHandler);
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
    app.post('/updatecustomer', customer_controller_1.default.updateCustomerHandler);
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
    app.post('/deletecustomer', customer_controller_1.default.deleteCustomerHandler);
    app.get('/getcustomers', customer_controller_1.default.getAllCustomersHandler);
}
exports.default = customerRoutes;
