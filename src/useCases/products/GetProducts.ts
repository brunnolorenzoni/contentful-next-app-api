import { IProductsRepository } from "repositories/IProductsRepository"

export class GetProductsUseCase {

  constructor(
    private productsRepository: IProductsRepository
  ){}

  async execute() : Promise<[]> {
    return []
  }
}
