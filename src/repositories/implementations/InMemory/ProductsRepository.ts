import { IProductsRepository } from '../../IProductsRepository';
import { Product } from '../../../entities/Product';

export class ProductsRepository implements IProductsRepository {
  
  private products: Product[] = [];
  
  async findAll(): Promise<Product[] | []> {
    return this.products
  }
}