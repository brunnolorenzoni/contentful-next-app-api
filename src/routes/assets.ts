import { NextFunction, Request, Response, Router } from "express"
import { assetsController } from "../controllers"
import validateRequestSchema from "../middlewares/ValidateRequestSchema"
import { productsFiltersSchema, productCreateSchema } from "../schema/joi-validator/Products"
import multer from 'multer'

const upload = multer()

const assetsRoute = Router()

assetsRoute.post('/', upload.single('file'), (request: Request, response: Response, next: NextFunction) => assetsController.create(request, response, next))

export default assetsRoute