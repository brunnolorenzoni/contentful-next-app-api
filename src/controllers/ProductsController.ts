import { NextFunction, Request, Response } from 'express'
import { CreateProductUseCase } from 'useCases/products/CreateProduct'
import { GetProductsUseCase } from '../useCases/products/GetProducts'

export class ProductController {

  constructor(
    private getProductsUseCase: GetProductsUseCase,
    private createProductUseCase: CreateProductUseCase,
  ) { }
  
  async index (req: Request, res: Response, next: NextFunction): Promise<Response> {
    try {
      const limit: number = req.query.limit ? parseInt(req.query.limit as string) : null
      const skip: number = req.query.skip ? parseInt(req.query.skip as string) : null
      const order: string = req.query.order ? req.query.order as string: null
      const include: number = req.query.include ? parseInt(req.query.include as string) : null

      const result = await this.getProductsUseCase.execute({ limit, skip, order, include })
      return res.json(result).status(200)
    } catch (e) {
      next(e)
    }
  }

  async create (req: Request, res: Response, next: NextFunction): Promise<Response> {
    try {
      const { slug } = req.body
      const result = await this.createProductUseCase.execute({ slug })
      return res.json({ products: result }).status(201)
    } catch (e) {
      next(e)
    }
  }
}