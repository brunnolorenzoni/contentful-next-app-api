import { NextFunction, Request, Response } from 'express'
import { CreateAssetUseCase } from 'useCases/assets/CreateAsset'
import { ICreateAssetRequestDTO, IFileDTO } from 'interfaces/assets/dto' 

export class AssetsController {

  constructor(
    private createsAssetUseCase: CreateAssetUseCase,
  ) { }
  
  async create (req: Request, res: Response, next: NextFunction): Promise<Response> {
    try {
      const body : ICreateAssetRequestDTO = req.body
      const file : IFileDTO =  req.file
      const result = await this.createsAssetUseCase.execute(body, file)
      return res.json(result).status(201)
    } catch (e) {
      next(e)
    }
  }
}