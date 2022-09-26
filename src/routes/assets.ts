import { NextFunction, Request, Response, Router } from "express"
import { assetsController } from "../controllers"
import validateRequestSchema from "../middlewares/ValidateRequestSchema"
import { productsFiltersSchema, productCreateSchema } from "../schema/joi-validator/Products"

const assetsRoute = Router()

assetsRoute.post('/',(request: Request, response: Response, next: NextFunction) => assetsController.create(request, response, next))

export default assetsRoute