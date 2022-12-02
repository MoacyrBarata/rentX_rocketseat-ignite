import { Category } from "../../entities/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";



class ListaCategoriesUseCase{

    constructor(private categoriesRepository: ICategoriesRepository ){

    }
    execute(): Category[]{
        const categories = this.categoriesRepository.list()
        return categories
    }
}

export{ListaCategoriesUseCase}