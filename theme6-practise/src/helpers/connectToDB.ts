import {connection} from "../../data-source";

export default async function (){
    try {
        await connection
        console.log((await connection).options.entities)
    }
    catch (e){
        console.log(`connection failed: \n ${e}`)
    }
}
