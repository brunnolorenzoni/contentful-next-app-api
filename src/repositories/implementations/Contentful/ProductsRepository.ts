import { IProductsRepository } from '../../IProductsRepository';
import { PlainClientAPI, QueryOptions, CollectionProp, EntryProps }  from 'contentful-management'
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
  
  async findAll(filters?: QueryOptions): Promise<CollectionProp<EntryProps>> {
    try {
      return await this.client.entry.getMany({
        environmentId: this.environment,
        spaceId: this.space,
        query: {
          content_type: 'product',
          ...filters
        }
      })
    } catch (e: any) {
      const error = JSON.parse(e.message)
      throw new ApiError(error.message, error.status)
    }
  }

  async create(product: Product): Promise<EntryProps> {

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
            id: img.id, 
            linkType: "Asset", 
            type: "Link"
          }
        }))
      }
    }

    if(product.brand) {
      data.fields.brand = {
        [language]: {
          sys: {
            id: product.brand.id, 
            linkType: "Entry", 
            type: "Link"
          }
        }
      }
    }

    if(product.categories && product.categories.length) {
      data.fields.categories = {
        [language]: product.categories.map((category) => ({
          sys: {
            id: category.id, 
            linkType: "Entry", 
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

  async publish (id: string) {
    try {

      const product = await this.client.entry.get({ 
        environmentId: 'master',
        spaceId: 'j9ffre4lp502',
        entryId: id
      })

      return await this.client.entry.publish({
        entryId: id,
        environmentId: 'master',
        spaceId: 'j9ffre4lp502'
      }, product)

    } catch (e: any) {
      console.log(e)
      const error = JSON.parse(e.message)
      throw new ApiError(error.message, error.status)
    }
  }
  async unpublish (id: string) {
    try {

      return await this.client.entry.unpublish({
        entryId: id,
        environmentId: 'master',
        spaceId: 'j9ffre4lp502'
      })

    } catch (e: any) {
      console.log(e)
      const error = JSON.parse(e.message)
      throw new ApiError(error.message, error.status)
    }
  }
}