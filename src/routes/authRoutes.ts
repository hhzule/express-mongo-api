import { Express, Request, Response } from 'express'
import AuthController from '../controller/auth.controller'

function authRoutes(app: Express) {

    app.get('/signin/:email', AuthController.getDealerByEmailHandler)
    }

    export default authRoutes