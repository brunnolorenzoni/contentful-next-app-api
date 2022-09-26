import { Router } from 'express'

import productsRoute from './products'
import assetsRoute from './assets'

const routes = Router()

routes.use('/products', productsRoute)
routes.use('/assets', assetsRoute)

export default routes