"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dealer_controller_1 = __importDefault(require("../controller/dealer.controller"));
function dealerRoutes(app) {
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
    app.get('/healthcheckdealer', (req, res) => {
        res.sendStatus(200);
    });
    app.post('/createdealer', dealer_controller_1.default.createDealerHandler);
    app.post('/updatedealer', dealer_controller_1.default.updateDealerHandler);
    app.post('/deletedealer', dealer_controller_1.default.deleteDealerHandler);
    app.get('/getdealers', dealer_controller_1.default.getAllDealersHandler);
}
exports.default = dealerRoutes;
