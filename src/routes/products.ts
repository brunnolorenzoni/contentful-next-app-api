import { NextFunction, Request, Response, Router } from "express"
import { productsController } from "../controllers"

const productsRoute = Router()

productsRoute.get('/', (request: Request, response: Response, next: NextFunction) => productsController.index(request, response, next))
productsRoute.post('/', (request: Request, response: Response, next: NextFunction) => productsController.create(request, response, next))

export default productsRoute