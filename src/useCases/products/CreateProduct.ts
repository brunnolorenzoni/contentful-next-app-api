import { Product } from "../../entities/Product"
import { ICreateProdutcRequestDTO } from "interfaces/products/dto"
import { IProductsRepository } from "repositories/IProductsRepository"

export class CreateProductUseCase {

  constructor(
    private productsRepository: IProductsRepository
  ){}

  async execute(data: ICreateProdutcRequestDTO) {
    
    const product = new Product(data)
    await this.productsRepository.create(product)
    return true
  }
}
