import { ICategoriesRepository } from '../../ICategoriesRepository';
import { PlainClientAPI, EntryProps }  from 'contentful-management'

interface ContentfulRepositoryParams {
  client: PlainClientAPI,
  space: string,
  environment: string
}

export class CategoriesRepository implements ICategoriesRepository {

  private client: PlainClientAPI;
  private space: string;
  private environment: string;

  constructor({ client, space, environment } : ContentfulRepositoryParams) {
    this.client = client
    this.space = space
    this.environment = environment
  }

  async getCategories(ids: string[]): Promise<EntryProps[] | []> {
    const categories = await this.client.entry.getMany({
      spaceId: this.space,
      environmentId: this.environment,
      query: {
        'sys.id': ids.join(',')
      }
    })
    return categories.items
  }
}