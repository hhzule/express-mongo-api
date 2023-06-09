import { Express, Request, Response } from 'express'
import CmsController from '../controller/cms.controller'

function authRoutes(app: Express) {

    app.get('/api/cms', CmsController.getCMSHandler)
    app.post('/api/updatecms', CmsController.updateCMSHandler)
    }

    export default authRoutes