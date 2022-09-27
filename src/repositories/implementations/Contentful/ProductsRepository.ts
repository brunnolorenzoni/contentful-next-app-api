import { IProductsRepository } from '../../IProductsRepository';
import { PlainClientAPI, QueryOptions, EntryProps }  from 'contentful-management'
import { ApiError } from '../../../helpers/ApiError'
import { Product } from 'entities/Product';

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

  async create(product: Product): Promise<unknown> {

    const language = "en-US"

    const data : Omit<EntryProps, 'sys'> = {
      fields: {
        productName: {
          [language]: product.productName
        },
        slug: {
          [language]: product.slug
        },
        productDescription: {
          [language]: product.productDescription
        },
        sizetypecolor: {
          [language]: product.sizetypecolor
        },
        tags: {
          [language]: product.tags
        },
        price: {
          [language]: product.price
        },
        quantity: {
          [language]: product.quantity
        },
        sku: {
          [language]: product.sku
        },
        website: {
          [language]: product.website
        },
      }
    }

    if(product.image && product.image.length) {
      data.fields.image = {
        [language]: product.image.map((img) => ({
          sys: {
            id: img, 
            linkType: "Asset", 
            type: "Link"
          }
        }))
      }
    }
    
    try {
      return await this.client.entry.createWithId({
        entryId: product.id,
        contentTypeId: 'product',
        environmentId: 'master',
        spaceId: 'j9ffre4lp502'
      }, data)
    } catch (e: any) {
      console.log(e)
      const error = JSON.parse(e.message)
      throw new ApiError(error.message, error.status)
    }
  }
}