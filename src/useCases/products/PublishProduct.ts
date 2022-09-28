import { IProductsRepository } from "repositories/IProductsRepository"

export class PublishProductUseCase {

  constructor(
    private productsRepository: IProductsRepository
  ){}

  async publish (id: string) {
    try {
      return this.productsRepository.publish(id)
    } catch (e: any) {
      throw new e
    }
  }
  async unpublish (id: string) {
    try {
      return this.productsRepository.unpublish(id)
    } catch (e: any) {
      throw new e
    }
  }
}