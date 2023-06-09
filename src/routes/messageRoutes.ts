import { Express, Request, Response } from 'express'
import MessageController from '../controller/message.controller'

function otpRoutes(app: Express) {

    app.post('/api/message', MessageController.createMessageHandler)
    app.get('/api/message', MessageController.getMessageHandler)
    }

    export default otpRoutes