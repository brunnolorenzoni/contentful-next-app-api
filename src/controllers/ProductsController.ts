import { NextFunction, Request, Response } from 'express'
import { CreateProductUseCase } from 'useCases/products/CreateProduct'
import { GetProductsUseCase } from 'useCases/products/GetProducts'
import { PublishProductUseCase } from 'useCases/products/PublishProduct'
import { ICreateProdutcRequestDTO } from 'interfaces/products/dto' 

export class ProductController {

  constructor(
    private getProductsUseCase: GetProductsUseCase,
    private createProductUseCase: CreateProductUseCase,
    private publishProductUseCase: PublishProductUseCase,
  ) { }
  
  async index (req: Request, res: Response, next: NextFunction): Promise<Response> {
    try {
      const result = await this.getProductsUseCase.execute(req.query)
      return res.json(result).status(200)
    } catch (e) {
      next(e)
    }
  }

  async create (req: Request, res: Response, next: NextFunction): Promise<Response> {
    try {
      const body : ICreateProdutcRequestDTO = req.body
      const result = await this.createProductUseCase.execute(body)
      return res.json(result).status(201)
    } catch (e) {
      next(e)
    }

  }
  async publish (req: Request, res: Response, next: NextFunction): Promise<Response> {
    const { id } = req.params 
    try {
      const result = await this.publishProductUseCase.publish(id)
      return res.json(result).status(201)
    } catch (e) {
      next(e)
    }
  }
  async unpublish (req: Request, res: Response, next: NextFunction): Promise<Response> {
    const { id } = req.params 
    try {
      const result = await this.publishProductUseCase.unpublish(id)
      return res.json(result).status(201)
    } catch (e) {
      next(e)
    }
  }
}