import { Express, Request, Response } from 'express'
import MessageController from '../controller/message.controller'

function otpRoutes(app: Express) {

    app.post('/api/message', MessageController.createMessageHandler)
    app.get('/api/messagesent/:id', MessageController.getMessageSenderHandler)
    app.get('/api/messagereceived/:id', MessageController.getMessageReceiverHandler)
    app.post('/api/updatemessage', MessageController.updateHandler)
    }

    export default otpRoutes