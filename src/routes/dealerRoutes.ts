import { Express, Request, Response } from 'express'
import DealerController from '../controller/dealer.controller'
import walleteGenerate from "./../middleware/walleteGenerate"
function dealerRoutes(app: Express) {
  /**
    * @openapi
    * tags:
    *   - name: create dealer
    *     description: dealer created
    *   - name: update dealer
    *     description: dealer updated
    *   - name: delete dealer
    *     description: dealer deleted
    *   - name: post dealers
    *     description: get dealers list
    *   - name: get dealer by id
    *     description: get dealer by _id
    * 
    * /dealer:
    *  post:
    *     tags:
    *     - create dealer
    *     summary: Register a dealer
    *     requestBody:
    *      required: true
    *      content:
    *        application/json:
    *           schema:
    *             $ref: '#/components/schemas/CreateDealerInput'
    *     responses:
    *      200:
    *        description: Success
    *        content:
    *          application/json:
    *            schema:
    *              $ref: '#/components/schemas/CreateDealerResponse'
    *      409:
    *        description: duplicate key error
    *      400:
    *        description: validation error, required key missing
    */

  app.post('/dealer', walleteGenerate,DealerController.createDealerHandler)
  /**
   * @openapi
   * '/dealer':
   *  put:
   *     tags:
   *     - update dealer
   *     summary: Update a dealer
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *             $ref: '#/components/schemas/UpdateDealerInput'
   *     responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/CreateDealerResponse'
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   */

  app.put('/dealer', DealerController.updateDealerHandler)

  /**
  * @openapi
  * '/dealer':
  *  delete:
  *     tags:
  *     - delete dealer
  *     summary: Delete a dealer
  *     requestBody:
  *      required: true
  *      content:
  *        application/json:
  *           schema:
  *             type: object
  *             required:
  *               - _id
  *               - auth
  *             properties:
  *               _id:
  *                 type: string
  *               auth:
  *                 type: string
  *     responses:
  *      200:
  *        description: dealer deleted 
  *      409:
  *        description: Conflict
  *      400:
  *        description: Bad request
  */
  app.delete('/dealer', DealerController.deleteDealerHandler)

  /**
   * @openapi
   * '/dealers':
   *  post:
   *     tags:
   *     - post dealers
   *     summary: Get all dealers
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
   *                      
   *     responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/GetDealersResponse'
   *      
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   */

  app.post('/dealers', DealerController.getAllDealersHandler)
  /**
   * @openapi
   * '/dealer':
   *  get:
   *     tags:
   *     - get dealer by id
   *     summary: Get a dealer
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *             type: object
   *             required:
   *               - _id
   *               - auth 
   *             properties:
   *               _id:
   *                 type: string   
   *               auth:
   *                 type: string    
   *     responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/CreateDealerResponse'
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   */

  app.get('/dealer', DealerController.getDealerByIdHandler)
}

export default dealerRoutes