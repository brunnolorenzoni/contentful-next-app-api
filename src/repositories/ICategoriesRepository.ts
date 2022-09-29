import { EntryProps }  from 'contentful-management'

export interface ICategoriesRepository {
  getCategories(ids: string[]): Promise<EntryProps[] | []>;
}