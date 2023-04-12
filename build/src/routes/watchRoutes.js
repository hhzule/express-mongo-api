"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const watch_controller_1 = __importDefault(require("../controller/watch.controller"));
function watchRoutes(app) {
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
    app.get('/healthcheckwatch', (req, res) => {
        res.sendStatus(200);
    });
    app.post('/createwatch', watch_controller_1.default.createWatchHandler);
    app.post('/updatewatch', watch_controller_1.default.updateWatchHandler);
    app.post('/deletewatch', watch_controller_1.default.deleteWatchHandler);
    app.get('/getwatches', watch_controller_1.default.getAllWatchesHandler);
}
exports.default = watchRoutes;
