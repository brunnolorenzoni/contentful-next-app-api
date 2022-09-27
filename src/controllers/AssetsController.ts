import { NextFunction, Request, Response } from 'express'
import { CreateAssetUseCase } from 'useCases/assets/CreateAsset'
import { ICreateAssetRequestDTO, IFileDTO } from 'interfaces/assets/dto' 

export class AssetsController {

  constructor(
    private createsAssetUseCase: CreateAssetUseCase,
  ) { }
  
  async create (req: Request, res: Response, next: NextFunction): Promise<Response> {

    const { title, description } = req.body

    console.log({ title, description })
    console.log(req.file)



    return res.send('ok').status(201)
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