import { v4 } from 'uuid'
import { Asset } from './Asset';
import { Brand } from './Brand';
import { Category } from './Category';
export class Product {
  public readonly id: string;
  public productName: string
  public slug: string
  public productDescription: string
  public sizetypecolor: string
  public image: Asset[]
  public tags: [string]
  public categories: Category[]
  public price: number
  public brand: Brand
  public quantity: number
  public sku: string
  public website: string

  constructor(props: Omit<Product, 'id' >, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = v4();
    }
  }
}