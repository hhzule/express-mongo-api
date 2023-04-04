import express from "express";
import config from 'config';
import connect from "./utils/connect";
import logger from "./utils/logger";
import dealerRoutes from "../routes/dealerRoutes";
import customerRoutes from "../routes/customerRoutes";
import swaggerDocs from "./utils/swagger";

const port = config.get<number>('port')

const app = express()
app.use(express.json())

app.listen(port, async () => {
    logger.info(`App is running at ${port}`)
    await connect()
    dealerRoutes(app)
    customerRoutes(app)
    swaggerDocs(app, port)
})