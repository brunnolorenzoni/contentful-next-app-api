import { CollectionProp, EntryProps, QueryOptions }  from 'contentful-management'
import { Product } from "entities/Product";

export interface IProductsRepository {
  findAll(filters?: QueryOptions): Promise<CollectionProp<EntryProps>>;
  create(product: Product): Promise<EntryProps>;
  publish(id: string): Promise<unknown>;
  unpublish(id: string): Promise<unknown>;
}