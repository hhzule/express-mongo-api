import { Express, Router, Request, Response } from 'express'
import AdminController from '../controller/admin.controller'


// const adminrouter = Router()
// adminrouter.get('/adjustcommision', AdminController.adjustCommisionHandler)
// module.exports = adminrouter

function adminRoutes(app: Express) {

  /**
   * @openapi
   * tags:
   *   - name: commission adjustment by admin
   *     description: commission adjustment by admin
   *   - name: create admin
   *     description: admin created
   *   - name: update admin
   *     description: update admin
   *   - name: delete admin
   *     description: delete admin
   *   - name: get admin
   *     description: get admin
   * '/adjustcommission':
   *  post:
   *     tags:
   *     - commission adjustment by admin
   *     summary: Register a customer
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *             $ref: '#/components/schemas/AdjustCommissionInput'
   *     responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/CreateAdminResponse'
   *      409:
   *        description: Conflict
   *      400:
   *        description: unauthorised
   */
  app.post('/adjustcommission', AdminController.adjustCommissionHandler)

  /**
   * @openapi
   * '/admin':
   *  post:
   *     tags:
   *     - create admin
   *     summary: Create an admin
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *             $ref: '#/components/schemas/CreateAdminInput'
   *     responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/CreateAdminResponse'
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   */

  app.post('/admin', AdminController.createAdminHandler)
  /**
   * @openapi
   * '/admin':
   *  put:
   *     tags:
   *     - update admin
   *     summary: Update admin
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *             $ref: '#/components/schemas/UpdateAdminInput'
   *     responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/CreateAdminResponse'
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   */

  app.put('/admin', AdminController.updateAdminHandler)

  /**
   * @openapi
   * '/admin':
   *  delete:
   *     tags:
   *     - delete admin
   *     summary: Delete admin
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *             type: object
   *             required:
   *               - auth
   *             properties:
   *               auth:
   *                 type: string
   *     responses:
   *      200:
   *        description: admin deleted 
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   */


  app.delete('/admin', AdminController.deleteAdminHandler)
  /**
 * @openapi
 * '/admin':
 *  get:
 *     tags:
 *     - get admin
 *     summary: Get an admin    
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateAdminResponse'
 *      409:
 *        description: Conflict
 *      400:
 *        description: Bad request
 */
  app.get('/admin', AdminController.getAdminHandler)

}

export default adminRoutes