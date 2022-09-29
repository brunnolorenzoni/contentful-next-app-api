import { EntryProps }  from 'contentful-management'

export interface IBrandRepository {
  getBrand(id: string): Promise<EntryProps | undefined>;
}