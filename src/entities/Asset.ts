import { v4 } from 'uuid'

type AssetConstrutor = {
  id?: string
  title?: string
  description?: string
  contentType?: string
  fileName?: string
  url?: string
}

export class Asset {
  public readonly id: string;
  public title: string;
  public description: string;
  public contentType: string;
  public fileName: string;
  public url: string;

  constructor(props: AssetConstrutor, id?: string) {
    Object.assign(this, props);

    if (!id && !props.id) {
      this.id = v4();
    }
  }
}