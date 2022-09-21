import { NextFunction, Request, Response } from 'express'
import { ApiError } from 'helpers/ApiError'

export default function errorHandler(error: Error & Partial<ApiError>, req: Request, res: Response, next: NextFunction) {
	const statusCode = error.statusCode ?? 500
	const message = error.statusCode ? error.message : 'Internal Server Error'

	try {
		const json = JSON.parse(message)
		return res.status(statusCode).json(json)
	} catch (e) {
		return res.status(statusCode).send({ message })
	}
}