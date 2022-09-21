import { NextFunction, Request, Response } from 'express';
import { BadRequestError } from '../helpers/ApiError';
import { Schema } from 'joi';

export default function validateRequestSchema(key, schema: Schema) {
  return (req: Request, res: Response, next: NextFunction) => { 
    const { error } = schema.validate(req[key]); 
  
    if (!error) return next(); 
    
    const { details } = error; 
    console.log(details)
    const message = details.map(i => i.message.replaceAll('"', '')).join(',');
    console.log(message)

    next(new BadRequestError(JSON.stringify({ error: message })))
  }
}