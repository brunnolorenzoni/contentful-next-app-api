import { createClient, ClientAPI } from 'contentful-management'

interface ClientParams {
  space: string, 
  environment?: string, 
  host?: string, 
  accessToken?: string
}

export default class Contenful {

  readonly client: ClientAPI;
  private acessToken: string = process.env.CONTENTFUL_MANAGEMENT_ACCESS_TOKEN;

  constructor (options?: ClientParams) {

    if(!options) {
      if(!this.acessToken) {
        throw new Error("CONTENTFUL ACCESS TOKEN NOT DEFINED IN ENV VARIABLES");
      }
    }

    this.client = createClient({
      ...options,
      accessToken: options && options.accessToken ? options.accessToken : this.acessToken,
    })

  }

} 