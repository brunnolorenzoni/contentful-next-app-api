import { Product } from "../../entities/Product"
import { Asset } from "../../entities/Asset"
import { Brand } from "../../entities/Brand"
import { Category } from "../../entities/Category"
import { ICreateProdutcRequestDTO } from "interfaces/products/dto"
import { IProductsRepository } from "repositories/IProductsRepository"
import { IAssetsRepository } from "repositories/IAssetsRepository"
import { ICategoriesRepository } from "repositories/ICategoriesRepository"
import { IBrandRepository } from "repositories/IBrandRepository"

export class CreateProductUseCase {

  constructor(
    private productsRepository: IProductsRepository,
    private assetsRepository: IAssetsRepository,
    private categoriesRepository: ICategoriesRepository,
    private brandRepository: IBrandRepository,
  ){}

  async execute(data: ICreateProdutcRequestDTO) {
    const { productName, slug, productDescription, sizetypecolor, tags, price, quantity, sku, website } = data 

    
    const assetsRef = []
    const images = await this.assetsRepository.getAssets(data.images)
    if(images.length) {
      for (const image of images) {
        assetsRef.push(new Asset(
          {
            id: image.sys.id,
            title: image.fields.title['en-US'],
            description: image.fields.description['en-US'],
            contentType: image.fields.file['en-US'].contentType,
            fileName: image.fields.file['en-US'].fileName,
            url: image.fields.file['en-US'].url
          }
        ))
      }
    }

    const categoriesRef = []
    const categories = await this.categoriesRepository.getCategories(data.categories)
    if(categories.length) {
      for (const category of categories) {
        categoriesRef.push(new Category(
          {
            title: category.fields.title['en-US'],
            image: new Asset({id: category.fields.image['en-US'].sys.id}),
            categoryDescription: category.fields.categoryDescription['en-US'],
            slug: category.fields.slug['en-US']
          }
        ), category.sys.id)
      }
    }
    let brandRef: Brand;
    const brand = await this.brandRepository.getBrand(data.brand)
    if(brand) {
      brandRef = new Brand({
        id: brand.sys.id,
        companyName: brand.fields.companyName['en-US'],
        logo: brand.fields.logo['en-US'],
        companyDescription: brand.fields.companyDescription['en-US'],
        website: brand.fields.website['en-US'],
        twitter: brand.fields.twitter['en-US'],
        email: brand.fields.email['en-US'],
        phone: brand.fields.phone['en-US'],
      })
    }

    const product = new Product({ productName, slug, productDescription, sizetypecolor, image: assetsRef, tags, categories: categoriesRef, price, brand: brandRef, quantity, sku, website })
    return await this.productsRepository.create(product)
  }
}
