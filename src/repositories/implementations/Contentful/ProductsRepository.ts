import { IProductsRepository } from '../../IProductsRepository';
import { ClientAPI }  from 'contentful-management'

export class ProductsRepository implements IProductsRepository {

  constructor(
    private client: ClientAPI
  ) {}
  
  async findAll(): Promise<[true]> {
    console.log(this.client)
    /*
    this.client
      .getEntries({ content_type: 'product' })
      .then((response: EntryCollection<unknown>) => {
        return response.items.map((entry: Entry<unknown>) => {
          const result: T = entry.fields as T
          return result
        })
      })

      */
    return [true]
  }
}