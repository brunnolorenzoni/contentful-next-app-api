import { IProductsRepository } from "repositories/IProductsRepository"
import { QueryOptions }  from 'contentful-management' 

export class GetProductsUseCase {

  constructor(
    private productsRepository: IProductsRepository
  ){}

  async execute(params: QueryOptions) {
    try {
      return this.productsRepository.findAll(params)
    } catch (e: any) {
      throw new e
    }
  }
}