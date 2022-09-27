import { ICreateAssetRequestDTO, IFileDTO } from "interfaces/assets/dto"
import { IAssetsRepository } from "repositories/IAssetsRepository"
import { Asset } from "../../entities/Asset"

export class CreateAssetUseCase {

  constructor(
    private assetsRepository: IAssetsRepository
  ){}

  async execute(data: ICreateAssetRequestDTO, file: IFileDTO) {
    const asset = new Asset({ ...data, contentType: ''})
    return await this.assetsRepository.create(asset, file)
  }
}
