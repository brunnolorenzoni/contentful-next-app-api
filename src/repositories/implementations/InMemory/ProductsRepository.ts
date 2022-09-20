import { IProductsRepository } from '../../IProductsRepository';
import { Product } from '../../../entities/Product';

export class InMemoryProductsRepository implements IProductsRepository {
  
  private products: Product[] = [];
  
  async findAll(): Promise<Product[] | []> {
    return this.products
  }
}