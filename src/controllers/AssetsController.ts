import { NextFunction, Request, Response } from 'express'
import { CreateAssetUseCase } from 'useCases/assets/CreateAsset'
import { ICreateAssetRequestDTO } from 'interfaces/assets/dto' 

export class AssetsController {

  constructor(
    private createsAssetUseCase: CreateAssetUseCase,
  ) { }
  
  async create (req: Request, res: Response, next: NextFunction): Promise<Response> {

    console.log(req)
    console.log(req.body)



    return res.send('ok').status(201)
    try {
      const body : ICreateAssetRequestDTO = req.body
      //const result = await this.createsAssetUseCase.execute(body, file)
      //return res.json(result).status(201)
    } catch (e) {
      next(e)
    }
  }
}