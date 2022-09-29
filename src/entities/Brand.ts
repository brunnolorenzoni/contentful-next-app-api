import { v4 } from 'uuid'
import { Asset } from './Asset';

type BrandConstrutor = {
  id?: string
  companyName: string
  logo: string
  companyDescription: string
  website: string
  twitter: string
  email: string
  phone: string
}
export class Brand {
  public readonly id: string;
  public companyName: string
  public logo: Asset
  public companyDescription: string
  public website: string
  public twitter: string
  public email: string
  public phone: string

  constructor(props: BrandConstrutor, id?: string) {
    Object.assign(this, props);

    if (!id && !props.id) {
      this.id = v4();
    }
  }
}