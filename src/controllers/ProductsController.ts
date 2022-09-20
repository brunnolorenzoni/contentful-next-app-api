import { Request, Response } from 'express'
import { CreateProductUseCase } from 'useCases/products/CreateProduct'
import { GetProductsUseCase } from '../useCases/products/GetProducts'

export class ProductController {

  constructor(
    private getProductsUseCase: GetProductsUseCase,
    private createProductUseCase: CreateProductUseCase,
  ) { }
  
  async index (req: Request, res: Response): Promise<Response> {
    const result = await this.getProductsUseCase.execute()
    return res.json({ user: result }).status(200)
  }

  async create (req: Request, res: Response): Promise<Response> {
    const { slug } = req.body
    const result = await this.createProductUseCase.execute({ slug })
    return res.json({ user: result }).status(201)
  }
}