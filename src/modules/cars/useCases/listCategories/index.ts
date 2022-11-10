import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListaCategoriesUseCase } from "./ListCategoriesUseCase";



const categoriesRepository = CategoriesRepository.getInstance()
const listCategoriesUseCase = new ListaCategoriesUseCase(categoriesRepository)
const listCategoriesController = new ListCategoriesController(listCategoriesUseCase)

export{listCategoriesController}