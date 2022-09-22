import { uuid } from 'uuidv4'
import { Brand } from './Brand';
import { Category } from './Category';
import { Image } from './Image';

export class Product {
  public readonly id: string;
  public productName: string
  public slug: string
  public productDescription: string
  public sizetypecolor: string
  public image: Image[]
  public tags: [string]
  public categories: Category[]
  public price: string
  public brand: Brand
  public quantity: string
  public sku: string
  public website: string

  constructor(props: Omit<Product, 'id' | 'image' | 'categories' | 'brand'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }
}