import Joi from 'joi'

const productsQueryFilters = Joi.object().keys({
  limit: Joi.number().min(1).optional(),
  skip: Joi.number().min(1).optional(),
  include: Joi.number().min(1).max(10).optional(),
  order: Joi.string().optional()
})

export { productsQueryFilters };