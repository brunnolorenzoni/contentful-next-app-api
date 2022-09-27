import Joi from 'joi'

export const fileSchema = Joi.object().keys({
  fieldname: Joi.string().valid('file').required(),
  originalname: Joi.string().required(),
  encoding: Joi.string().required(),
  mimetype: Joi.string().valid('image/jpeg', 'image/png').required(),
  buffer: Joi.binary().required(),
  size: Joi.number().required()
})


export const createAssetSchema = Joi.object().keys({
  title: Joi.string().required(),
  description: Joi.string().required(),
})