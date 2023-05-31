import "reflect-metadata";
import {executeSQLQueries, readSQLFiles} from "./sql/executor";

const main = async () => {
    try {
        const queries = await readSQLFiles('./sql/queries')
        const results = await executeSQLQueries(queries)
        console.log(results)
    } catch (error) {
        console.error("Error:", error);
    }
};

main();
