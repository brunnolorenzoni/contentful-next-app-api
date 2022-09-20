import { Request, Response, Router } from "express"
import { productsController } from "../controllers"

const productsRoute = Router()

productsRoute.get('/', (request: Request, response: Response) => productsController.index(request, response))
productsRoute.post('/', (request: Request, response: Response) => productsController.create(request, response))

export default productsRoute