import { IAssetsRepository } from '../../IAssetsRepository';
import { PlainClientAPI }  from 'contentful-management'
import { ApiError } from '../../../helpers/ApiError'
import { Asset } from 'entities/Asset';

interface ContentfulRepositoryParams {
  client: PlainClientAPI,
  space: string,
  environment: string
}

export class AssetsRepository implements IAssetsRepository {

  private client: PlainClientAPI;
  private space: string;
  private environment: string;

  constructor({ client, space, environment } : ContentfulRepositoryParams) {
    this.client = client
    this.space = space
    this.environment = environment
  }
  
  async create(asset: Asset, file: ArrayBuffer): Promise<unknown> {

    const language = "en-US"
    
    try {
      const upload = await this.client.upload.create({
        spaceId: this.space,
        environmentId: this.environment
      }, {
        file: ''
      })
      console.log(upload)
      /*
      await this.client.asset.createWithId({
        assetId: asset.id,
        environmentId: this.environment,
        spaceId: this.space
      }, {
        fields: {
          title: {
            [language]: 'Hello Title'
          },
          description: {
            [language]: 'Hello Description'
          },
          file: {
            [language]: {
              contentType: "image/jpg",
              fileName: "friends.jpg",
              uploadFrom: {
                "sys": {
                  "type": "Link",
                  "linkType": "Upload",
                  "id": upload.id
                }
              }
            }
          }
        },
      })
      */
      return true
    } catch (e: any) {
      console.log(e)
      const error = JSON.parse(e.message)
      throw new ApiError(error.message, error.status)
    }
  }
    
}