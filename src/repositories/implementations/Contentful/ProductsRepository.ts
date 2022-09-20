import { IProductsRepository } from '../../IProductsRepository';
import { PlainClientAPI }  from 'contentful-management'

interface ContentfulRepositoryParams {
  client: PlainClientAPI,
  space: string,
  environment: string
}
interface SearchFilters {
  limit: number,
  skip: number,
}

export class ProductsRepository implements IProductsRepository {

  private client: PlainClientAPI;
  private space: string;
  private environment: string;

  constructor({ client, space, environment } : ContentfulRepositoryParams) {
    this.client = client
    this.space = space
    this.environment = environment
  }
  
  async findAll(filters?: SearchFilters): Promise<any> {
    const products = await this.client.entry.getMany({
      environmentId: this.environment,
      spaceId: this.space,
      query: {
        content_type: 'product'
      }
    })
    console.log(products)
    return products
  }
}