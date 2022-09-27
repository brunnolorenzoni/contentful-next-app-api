import { NextFunction, Request, Response, Router } from "express"
import { assetsController } from "../controllers"
import validateRequestSchema from "../middlewares/ValidateRequestSchema"
import { createAssetSchema, fileSchema } from "../schema/joi-validator/Assets"
import multer from 'multer'

const upload = multer()

const assetsRoute = Router()

assetsRoute.post('/', upload.single('file'), validateRequestSchema('file', fileSchema), validateRequestSchema('body', createAssetSchema), (request: Request, response: Response, next: NextFunction) => assetsController.create(request, response, next))

export default assetsRoute