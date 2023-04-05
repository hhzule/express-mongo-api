import { Express, Request, Response } from 'express'
import WatchController from '../controller/watch.controller'

function watchRoutes(app: Express) {
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
  app.get('/healthcheckwatch', (req: Request, res: Response) => {
    res.sendStatus(200)
  })


  app.post('/createwatch', WatchController.createWatchHandler)
  app.post('/updatewatch', WatchController.updateWatchHandler)
  app.post('/deletewatch', WatchController.deleteWatchHandler)
  app.get('/getwatches', WatchController.getAllWatchesHandler)
}

export default watchRoutes