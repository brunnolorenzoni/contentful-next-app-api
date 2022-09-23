import { Asset } from './Asset';
export class Image extends Asset{
  public url: string

  constructor(props) {
    super(props)
    Object.assign(this, props);
  }
}