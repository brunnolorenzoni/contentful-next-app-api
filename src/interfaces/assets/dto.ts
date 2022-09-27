export interface ICreateAssetRequestDTO {
  title: string
  description: string
  fileName: string
}
export interface IFileDTO {
  fieldname: string
  originalname: string
  encoding: string
  mimetype: string
  buffer: ArrayBuffer
  size: number
}