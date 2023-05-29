import request from 'request'
import fs from 'fs'

const readJSON = (pathToJSON: string): Promise<object> => {
    return new Promise((resolve, reject) => {
        fs.readFile(`${pathToJSON}.json`, async (err, data) => {
            if (err) reject(err)
            else resolve(JSON.parse(data.toString()))
        } )
    })

}
const writeToFile = (path: string, data: string): Promise<any> => {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, data, (err) => {
            if (err) reject(err)
        })
    })
}
const getHTML = (uri: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        request({ uri }, (error, response, body) => {
            if (error) {
                reject(error);
            } else {
                resolve(body);
            }
        });
    });
};


const main = async () => {
    const JSON_FILENAME = 'list'
    const dirToCreate = `${JSON_FILENAME}_pages`
    await fs.mkdir(dirToCreate, err => console.log('error: ', err))
    const links: any = await readJSON(JSON_FILENAME)
    links.forEach(async (link: string, index: number) => {
        const html = await getHTML(link)
        writeToFile(`${dirToCreate}/${index}`, html)
    })
}
main()


