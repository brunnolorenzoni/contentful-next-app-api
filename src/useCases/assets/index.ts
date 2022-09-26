import { AssetsRepository } from "../../repositories/implementations/Contentful/AssetsRepository";
import { CreateAssetUseCase } from "./CreateAsset";

import Contenful from '../../lib/Contenful'

const { client } = new Contenful()
const productsRepository = new AssetsRepository({client, space: 'j9ffre4lp502', environment: 'master' })

const createsAssetUseCase = new CreateAssetUseCase(
  productsRepository,
)

export { createsAssetUseCase }