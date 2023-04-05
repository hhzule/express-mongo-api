import { Express, Request, Response } from 'express'
import DealerController from '../controller/dealer.controller'

function dealerRoutes(app: Express) {
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
  app.get('/healthcheckdealer', (req: Request, res: Response) => {
    res.sendStatus(200)
  })

  app.post('/createdealer', DealerController.createDealerHandler)
  app.post('/updatedealer', DealerController.updateDealerHandler)
  app.post('/deletedealer', DealerController.deleteDealerHandler)
  app.get('/getdealers', DealerController.getAllDealersHandler)
}

export default dealerRoutes