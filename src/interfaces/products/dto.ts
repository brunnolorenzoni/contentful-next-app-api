export interface ICreateProdutcRequestDTO {
  productName: string,
  slug: string,
  productDescription: string,
  sizetypecolor: string,
  images: [string],
  tags: [string],
  categories: [string],
  price: number,
  brand: string,
  quantity: number,
  sku: string,
  website: string,
}