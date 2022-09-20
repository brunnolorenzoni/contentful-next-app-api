import { ICreateProdutcRequestDTO } from "interfaces/products/dto"
import { IProductsRepository } from "repositories/IProductsRepository"

export class CreateProductUseCase {

  constructor(
    private productsRepository: IProductsRepository
  ){}

  async execute({ slug }: ICreateProdutcRequestDTO) {
    return slug
  }
}
