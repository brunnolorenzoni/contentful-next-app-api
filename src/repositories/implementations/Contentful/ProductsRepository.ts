import { IProductsRepository } from '../../IProductsRepository';
import { PlainClientAPI, QueryOptions }  from 'contentful-management'
import { ApiError } from '../../../helpers/ApiError'

interface ContentfulRepositoryParams {
  client: PlainClientAPI,
  space: string,
  environment: string
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
  
  async findAll(filters?: QueryOptions): Promise<unknown> {
    try {
      const result = await this.client.entry.getMany({
        environmentId: this.environment,
        spaceId: this.space,
        query: {
          content_type: 'product',
          ...filters
        }
      })
      return {
        limit: result.limit,
        skip: result.skip,
        total: result.total,
        data: result.items
      }
    } catch (e: any) {
      const error = JSON.parse(e.message)
      throw new ApiError(error.message, error.status)
    }
  }
}