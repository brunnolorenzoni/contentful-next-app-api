export interface ICreateProdutcRequestDTO {
  productName: string,
  slug: string,
  productDescription: string,
  sizetypecolor: string,
  image?: [string],
  tags: [string],
  categories?: [string],
  price: string,
  brand?: string,
  quantity: string,
  sku: string,
  website: string,
}