import { v4 } from 'uuid'

export class Asset {
  public readonly id: string;
  public title: string;
  public description: string;
  public contentType: string;
  public fileName: string;
  public url: string;

  constructor(props: Omit<Asset, 'id' | 'url'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = v4();
    }
  }
}