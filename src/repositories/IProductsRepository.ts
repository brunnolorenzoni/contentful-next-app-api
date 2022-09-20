export interface IProductsRepository {
  findAll(filters?: unknown): Promise<unknown>;
}