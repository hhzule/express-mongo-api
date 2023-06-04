import { Express, Request, Response } from 'express'
import OtpController from '../controller/otp.controller'
import walleteGenerate from "../middleware/walleteGenerate"

function otpRoutes(app: Express) {

    app.post('/api/otp', OtpController.optSendSmsHandler)
    app.post('/api/verify',walleteGenerate, OtpController.optVerifySmsHandler)
    }

    export default otpRoutes