import { NextFunction, Request, Response, Router } from "express"
import { productsController } from "../controllers"
import validateRequestSchema from "../middlewares/ValidateRequestSchema"
import { productsFiltersSchema, productCreateSchema, productPublishShema } from "../schema/joi-validator/Products"

const productsRoute = Router()

productsRoute.get('/', validateRequestSchema('query', productsFiltersSchema), (request: Request, response: Response, next: NextFunction) => productsController.index(request, response, next))
productsRoute.post('/', validateRequestSchema('body', productCreateSchema), (request: Request, response: Response, next: NextFunction) => productsController.create(request, response, next))
productsRoute.put('/publish/:id', validateRequestSchema('params', productPublishShema), (request: Request, response: Response, next: NextFunction) => productsController.publish(request, response, next))
productsRoute.put('/unpublish/:id', validateRequestSchema('params', productPublishShema), (request: Request, response: Response, next: NextFunction) => productsController.unpublish(request, response, next))

export default productsRoute