import { Express, Request, Response } from 'express'
import WatchController from '../controller/watch.controller'

function watchRoutes(app: Express) {
  /**
    * @openapi
    * tags:
    *   - name: create watch
    *     description: watch created
    *   - name: update watch
    *     description: watch updated
    *   - name: delete watch
    *     description: watch deleted
    *   - name: get watches
    *     description: get watches list
    *   - name: get watch by id
    *     description: get watch by _id
    * 
    * /watch:
    *  post:
    *     tags:
    *     - create watch
    *     summary: watch created by dealer or customer
    *     description: watch created
    *     requestBody:
    *       required: true
    *       content:
    *         application/json:
    *            schema:
    *              $ref: '#/components/schemas/CreateWatchInput'    
    *     responses:
    *       200:
    *         description: Success
    *         content:
    *           application/json:
    *             schema:
    *               $ref: '#/components/schemas/CreateWatchResponse'
    *       409:
    *         description: Conflict
    *       400:
    *         description: Bad request
    */
  app.post('/watch', WatchController.createWatchHandler)
  /**
   * @openapi
   * '/watch':
   *  put:
   *     tags:
   *     - update watch
   *     summary: Update a watch
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *             $ref: '#/components/schemas/UpdateWatchInput'
   *     responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/CreateWatchResponse'
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   */

  app.put('/watch', WatchController.updateWatchHandler)

  /**
 * @openapi
 * '/watch':
 *  delete:
 *     tags:
 *     - delete watch
 *     summary: Delete a watch
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
 *        description: customer watch
 *      409:
 *        description: Conflict
 *      400:
 *        description: Bad request
 */

  app.delete('/watch', WatchController.deleteWatchHandler)
  /**
   * @openapi
   * '/watches':
   *  get:
   *     tags:
   *     - get watches
   *     summary: Get all watches
   *     responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/GetWatchesResponse'
   *      
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   */

  app.get('/watches', WatchController.getAllWatchesHandler)
  /**
   * @openapi
   * '/watch':
   *  get:
   *     tags:
   *     - get watch by id
   *     summary: Get a watch
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
   *              $ref: '#/components/schemas/CreateWatchResponse'
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   */
  app.get('/watch', WatchController.getWatchByIdHandler)
  app.get('/watches/:id', WatchController.getWatchByCreatorIdHandler)
  app.get('/watchmetadata/:id', WatchController.getWatchMetadata)
  app.get('/watch/:id', WatchController.getWatchByTokenIdHandler)


}

export default watchRoutes