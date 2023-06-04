import express from "express";
import dealerRoutes from "../routes/dealerRoutes";
import customerRoutes from "../routes/customerRoutes";
import watchRoutes from "../routes/watchRoutes";
import adminRoutes from "../routes/adminRoutes"
import authRoutes from "../routes/authRoutes";
import otpRoutes from "../routes/otpRoutes";
import transactionRoutes from "../routes/transactionRoutes";
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
    otpRoutes(app)
    transactionRoutes(app)
    return app;
}

export default createServer;

