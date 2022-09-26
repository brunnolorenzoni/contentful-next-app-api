import { v4 } from 'uuid'
import { Asset } from './Asset';
export class Category {
  public readonly id: string;
  public title: string
  public image: Asset
  public categoryDescription: string
  public slug: string

  constructor(props: Omit<Category, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = v4();
    }
  }
}