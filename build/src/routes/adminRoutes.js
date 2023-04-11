"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const admin_controller_1 = __importDefault(require("../controller/admin.controller"));
function adminRoutes(app) {
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
    app.post('/adjustcommision', admin_controller_1.default.adjustCommisionHandler);
}
exports.default = adminRoutes;
