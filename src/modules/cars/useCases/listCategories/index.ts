import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListaCategoriesUseCase } from "./ListCategoriesUseCase";



const categoriesRepository = new CategoriesRepository()
const listCategoriesUseCase = new ListaCategoriesUseCase(categoriesRepository)
const listCategoriesController = new ListCategoriesController(listCategoriesUseCase)

export{listCategoriesController}