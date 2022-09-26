import { Asset } from "../entities/Asset";

export interface IAssetsRepository {
  create(asset: Asset, file: ArrayBuffer): Promise<unknown>;
}