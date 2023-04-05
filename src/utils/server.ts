import express from "express";
import dealerRoutes from "../routes/dealerRoutes";
import customerRoutes from "../routes/customerRoutes";

function createServer() {
    const app = express();
    app.use(express.json());
    dealerRoutes(app)
    customerRoutes(app)
    return app;
}

export default createServer;

