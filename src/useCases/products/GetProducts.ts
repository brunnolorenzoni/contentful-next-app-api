import { IProductsRepository } from "repositories/IProductsRepository"
import { QueryOptions }  from 'contentful-management' 

export class GetProductsUseCase {

  constructor(
    private productsRepository: IProductsRepository
  ){}

  async execute(params: QueryOptions) {
    try {
    
      const { limit, skip, order } = params
      let { include } = params
      if(!include) include = 1
      return this.productsRepository.findAll({ limit, skip, order, include })

    } catch (e: any) {
      throw new e
    }
  }
}