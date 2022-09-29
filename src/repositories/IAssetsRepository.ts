import { IFileDTO } from "interfaces/assets/dto";
import { Asset } from "../entities/Asset";
import { AssetProps }  from 'contentful-management'

export interface IAssetsRepository {
  getAssets(ids: string[]): Promise<AssetProps[] | []>;
  create(asset: Asset, file: IFileDTO): Promise<AssetProps>;
}