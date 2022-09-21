import { NextFunction, Request, Response, Router } from "express"
import { productsController } from "../controllers"
import validateRequestSchema from "../middlewares/ValidateRequestSchema"
import { productsQueryFilters } from "../schema/joi-validator/Products"

const productsRoute = Router()

productsRoute.get('/', validateRequestSchema('query', productsQueryFilters), (request: Request, response: Response, next: NextFunction) => productsController.index(request, response, next))

productsRoute.post('/', (request: Request, response: Response, next: NextFunction) => productsController.create(request, response, next))

export default productsRoute