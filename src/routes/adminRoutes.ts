import { Express, Request, Response } from 'express'
import AdminController from '../controller/admin.controller'

function adminRoutes(app: Express) {
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
    app.post('/adjustcommision', AdminController.adjustCommisionHandler)
}

export default adminRoutes