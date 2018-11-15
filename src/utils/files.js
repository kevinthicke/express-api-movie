const fs = require('fs');
const pathName = './data/movies.json';

const saveFile = (content) => {
    const contentJSON = JSON.stringify(content);
        fs.writeFileSync(pathName, contentJSON, err => {
        if (err) console.log("Error! ", err);
        else console.log(`File has been written succesfully`);
    });
}

module.exports = {
    saveFile
}