import { createConnection, getConnectionOptions } from "typeorm";

interface IOptions{
    host: string;
}

createConnection()

getConnectionOptions().then( options =>{
    const newOptions = options as IOptions
    newOptions.host = 'rentx';
    createConnection({
        ...options,
    })
})