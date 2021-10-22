const fs = require('fs');

function writeFile(fileContent) {
    return new Promise(function (resolve, reject) {
        fs.writeFile("./dist/index.html", fileContent, function (error) {
            if (error) {
                reject(error);
                return;
            }
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
}

function copyFile() {
    return new Promise(function (resolve, reject) {
        fs.copyFile("./src/style.css", "./dist/style.css", function (error) {
            if (error) {
                reject(error);
                return;
            }
            resolve({
                ok: true,
                message: 'File copied!'
            });
        });
    });
}

// Shorthand property names (name of key and value the same).
module.exports = {writeFile, copyFile}