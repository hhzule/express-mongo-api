import express from "express";
import dealerRoutes from "../routes/dealerRoutes";
import customerRoutes from "../routes/customerRoutes";
import watchRoutes from "../routes/watchRoutes";
import adminRoutes from "../routes/adminRoutes"
import authRoutes from "../routes/authRoutes";
// import adminrouter from "../routes/adminRoutes"
import cors from "cors"

function createServer() {
    const app = express();
    app.use(cors());
    app.use(express.json());
    // app.use(adminrouter)
    dealerRoutes(app)
    customerRoutes(app)
    watchRoutes(app)
    adminRoutes(app)
    authRoutes(app)
    return app;
}

export default createServer;

