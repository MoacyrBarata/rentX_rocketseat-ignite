import { Request,Response } from "express";
import { CreateCourseService } from "./CreateCourseService";


export function createCouse(req:Request, res: Response){
    CreateCourseService.execute({
        name:"Node",
        duration: 10,
        educator: "Moa"
    })

    return res.send()
}