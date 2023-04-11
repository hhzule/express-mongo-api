import express from "express";
import config from 'config';
import connect from "./utils/connect";
import logger from "./utils/logger";
import swaggerDocs from "./utils/swagger";
import createServer from "./utils/server";

const port = config.get<number>('port')
export const app = createServer()

app.listen(port, async () => {
    logger.info(`App is running at ${port}`)
    await connect()
    swaggerDocs(app, port)
})