const fs = require('fs');
// Writes index.html to dist and retuns a promise on resolution.
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
// Copies the style.css file to dist and returns a promise on resolution.
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