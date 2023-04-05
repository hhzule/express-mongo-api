import express from "express";
import dealerRoutes from "../routes/dealerRoutes";
import customerRoutes from "../routes/customerRoutes";
import watchRoutes from "../routes/watchRoutes";
import adminRoutes from "../routes/adminRoutes"
function createServer() {
    const app = express();
    app.use(express.json());
    dealerRoutes(app)
    customerRoutes(app)
    watchRoutes(app)
    adminRoutes(app)
    return app;
}

export default createServer;

