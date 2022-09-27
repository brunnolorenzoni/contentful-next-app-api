import { IAssetsRepository } from '../../IAssetsRepository';
import { PlainClientAPI }  from 'contentful-management'
import { ApiError } from '../../../helpers/ApiError'
import { Asset } from 'entities/Asset';
import { IFileDTO } from 'interfaces/assets/dto';

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
  
  async create(asset: Asset, file: IFileDTO): Promise<unknown> {

    const language = "en-US"

    try {
      const upload = await this.client.upload.create({
        spaceId: this.space,
        environmentId: this.environment
      }, {
        file: file.buffer
      })

      const assetContentful = await this.client.asset.createWithId({
        assetId: asset.id,
        environmentId: this.environment,
        spaceId: this.space
      }, {
        fields: {
          title: {
            [language]: asset.title
          },
          description: {
            [language]: asset.description
          },
          file: {
            [language]: {
              contentType: asset.contentType,
              fileName: file.originalname,
              uploadFrom: {
                "sys": {
                  "type": "Link",
                  "linkType": "Upload",
                  "id": upload.sys.id
                }
              }
            }
          }
        },
      })

      const process = await this.client.asset.processForAllLocales({
        spaceId: this.space,
        environmentId: this.environment
      }, assetContentful)

      await this.client.asset.publish({
        assetId: asset.id,
        environmentId: this.environment,
        spaceId: this.space,
      }, process)

      return process
    } catch (e: any) {
      console.log(e)
      const error = JSON.parse(e.message)
      throw new ApiError(error.message, error.status)
    }
  }
    
}