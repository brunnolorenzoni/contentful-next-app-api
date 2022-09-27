import { IFileDTO } from "interfaces/assets/dto";
import { Asset } from "../entities/Asset";

export interface IAssetsRepository {
  create(asset: Asset, file: IFileDTO): Promise<unknown>;
}