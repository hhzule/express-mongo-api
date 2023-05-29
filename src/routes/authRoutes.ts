import { Express, Request, Response } from 'express'
import AuthController from '../controller/auth.controller'

function authRoutes(app: Express) {

    app.get('/api/signin/:email', AuthController.getDealerByEmailHandler)
    app.get('/api/dealersignin/:id', AuthController.getDealerByIdHandler)
    }

    export default authRoutes