import { v4 } from 'uuid'
import { Image } from "./Image"
export class Category {
  public readonly id: string;
  public title: string
  public image: Image
  public categoryDescription: string
  public slug: string

  constructor(props: Omit<Category, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = v4();
    }
  }
}