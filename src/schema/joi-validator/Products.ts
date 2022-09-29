import Joi from 'joi'

export const productPublishShema =Joi.object().keys({
  id: Joi.string().uuid(),
})

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
  images: Joi.array().items(Joi.string()).required(),
  tags: Joi.array().items(Joi.string()),
  categories: Joi.array().items(Joi.string()).required(),
  price: Joi.number().min(0.01).required(),
  brand: Joi.string().required(),
  quantity: Joi.number().min(1).required(),
  sku: Joi.string().required(),
  website: Joi.string().required(),
})