import { ProductsRepository } from "../../repositories/implementations/Contentful/ProductsRepository";
import { AssetsRepository } from "../../repositories/implementations/Contentful/AssetsRepository";
import { CategoriesRepository } from "../../repositories/implementations/Contentful/CategoriesRepository";
import { BrandRepository } from "../../repositories/implementations/Contentful/BrandRepository";
import { GetProductsUseCase } from "./GetProducts";
import { CreateProductUseCase } from "./CreateProduct";
import { PublishProductUseCase } from "./PublishProduct";

import Contenful from '../../lib/Contenful'

const { client } = new Contenful()
const productsRepository = new ProductsRepository({client, space: 'j9ffre4lp502', environment: 'master' })
const assetsRepository = new AssetsRepository({client, space: 'j9ffre4lp502', environment: 'master' })
const categoriesRepository = new CategoriesRepository({client, space: 'j9ffre4lp502', environment: 'master' })
const brandRepository = new BrandRepository({client, space: 'j9ffre4lp502', environment: 'master' })

const getProductsUseCase = new GetProductsUseCase(
  productsRepository,
)

const createProductUseCase = new CreateProductUseCase(
  productsRepository,
  assetsRepository,
  categoriesRepository,
  brandRepository
)

const publishProductsUseCase = new PublishProductUseCase(
  productsRepository,
)

export { getProductsUseCase, createProductUseCase, publishProductsUseCase }