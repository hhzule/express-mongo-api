import express from "express";
import config from 'config';
import connect from "./utils/connect";
import logger from "./utils/logger";
import swaggerDocs from "./utils/swagger";
import createServer from "./utils/server";
import  {contract_Events}   from "./sockets/listner";


// const port = config.get<number>('port')
export const app = createServer()

app.listen(3030, async () => {
    logger.info(`App is running at ${3030}`)
    await connect()
    swaggerDocs(app, 3030)
})

//  contract_Events.Listen('1337')
//  test
