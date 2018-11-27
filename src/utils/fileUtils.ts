import { writeFileSync } from 'fs';
const pathName = __dirname + '/../data/movies.json';

const saveFile = (content: object) => {
    const contentJSON = JSON.stringify(content);
    writeFileSync(pathName, contentJSON)
}

export = {
    saveFile
}