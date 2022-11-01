import { Category } from "../modules/cars/model/Category";

//DTO => Data transfer object
interface ICreateCategoryDTO{
    name: string;
    description: string
}

interface ICategoriesRepository{
    findByName(name:string): Category|undefined;
    list(): Category[]
    create({name, description}:ICreateCategoryDTO ): void
}

export {ICategoriesRepository, ICreateCategoryDTO}