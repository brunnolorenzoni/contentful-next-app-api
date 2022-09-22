import Joi from 'joi'

export const productsFiltersSchema = Joi.object().keys({
  limit: Joi.number().min(1).optional(),
  skip: Joi.number().min(1).optional(),
  include: Joi.number().min(1).max(10).optional(),
  order: Joi.string().optional()
})

export const productCreateSchema = Joi.object().keys({
  productName: Joi.string().required(),
  slug: Joi.string().required(),
  productDescription: Joi.string().required(),
  sizetypecolor: Joi.string().required(),
  image: Joi.array().items(Joi.string()),
  tags: Joi.array().items(Joi.string()),
  categories: Joi.array().items(Joi.string()),
  price: Joi.string().required(),
  brand: Joi.string().optional(),
  quantity: Joi.string().required(),
  sku: Joi.string().required(),
  website: Joi.string().required(),
})