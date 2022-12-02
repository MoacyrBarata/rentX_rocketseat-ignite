import { Specification } from "../../entities/Specification";
import { ICreateSpecificationDTO, ISpecificationRepository } from "../ISpecificationRepository";



class SpecificationRepository implements ISpecificationRepository {
    private specifications: Specification[]

    constructor(){
        this.specifications = []
    }
    

    create({ name, description }: ICreateSpecificationDTO): void {
        const specifications = new Specification()

        Object.assign(specifications,{
            name,
            description,
            created_at: new Date(),
        })

        this.specifications.push(specifications)
    }

    findByName(name: string): Specification | undefined {
        const specification = this.specifications.find(specification => specification.name === name)
        return specification
    }
    
}

export{SpecificationRepository}