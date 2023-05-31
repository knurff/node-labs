import * as fs from "fs";
import {createConnection} from "typeorm";

export async function readSQLFiles(folderPath: string): Promise<string[]> {
    const fileNames = fs.readdirSync(folderPath);
    const sqlQueries: string[] = [];

    for (const fileName of fileNames) {
        const filePath = `${folderPath}/${fileName}`;
        const query = fs.readFileSync(filePath, 'utf-8');
        sqlQueries.push(query);
    }

    return sqlQueries;
}

export async function executeSQLQueries(queries: string[]): Promise<any[]> {
    const connection = await createConnection(); // Create the connection

    const results = [];

    for (const query of queries) {
        const result = await connection.query(query);
        results.push(result);
    }

    console.log('SQL queries executed successfully.');

    return results;
}
