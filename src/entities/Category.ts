import { v4 } from 'uuid'
import { Asset } from './Asset';

type CategoryConstrutor = {
  id?: string
  title: string
  image: Asset
  categoryDescription: string
  slug: string
}

export class Category {
  public readonly id: string;
  public title: string
  public image: Asset
  public categoryDescription: string
  public slug: string

  constructor(props: CategoryConstrutor, id?: string) {
    Object.assign(this, props);

    if (!id && !props.id) {
      this.id = v4();
    }
  }
}