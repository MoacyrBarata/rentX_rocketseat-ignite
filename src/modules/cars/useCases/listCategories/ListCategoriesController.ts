import { Request, Response } from "express";
import { ListaCategoriesUseCase } from "./ListCategoriesUseCase";



class ListCategoriesController{
    constructor(private listCategoriesUseCase: ListaCategoriesUseCase ){}
    handle(req: Request, res: Response): Response {
        const all = this.listCategoriesUseCase.execute()

        return res.json(all)
    }
}

export{ListCategoriesController}