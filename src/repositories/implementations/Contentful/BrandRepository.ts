import { IBrandRepository } from '../../IBrandRepository';
import { PlainClientAPI, EntryProps }  from 'contentful-management'

interface ContentfulRepositoryParams {
  client: PlainClientAPI,
  space: string,
  environment: string
}

export class BrandRepository implements IBrandRepository {

  private client: PlainClientAPI;
  private space: string;
  private environment: string;

  constructor({ client, space, environment } : ContentfulRepositoryParams) {
    this.client = client
    this.space = space
    this.environment = environment
  }

  async getBrand(id: string): Promise<EntryProps | undefined> {
    const brand = await this.client.entry.get({
      spaceId: this.space,
      environmentId: this.environment,
      entryId: id
    })
    return brand
  }
}