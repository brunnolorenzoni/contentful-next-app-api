import { ICreateAssetRequestDTO, IFileDTO } from "interfaces/assets/dto"
import { IAssetsRepository } from "repositories/IAssetsRepository"
import { Asset } from "../../entities/Asset"

export class CreateAssetUseCase {

  constructor(
    private assetsRepository: IAssetsRepository
  ){}

  async execute(data: ICreateAssetRequestDTO, file: IFileDTO) {
    console.log({data, file})
    const asset = new Asset({ ...data, fileName: file.originalname, contentType: file.mimetype})
    return await this.assetsRepository.create(asset, file)
  }
}
