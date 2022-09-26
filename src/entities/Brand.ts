import { v4 } from 'uuid'
import { Asset } from './Asset';
export class Brand {
  public readonly id: string;
  public companyName: string
  public logo: Asset
  public companyDescription: string
  public website: string
  public twitter: string
  public email: string
  public phone: string

  constructor(props: Omit<Brand, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = v4();
    }
  }
}