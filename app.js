// Descructuring example.
// let a, b;
// [a,b] = [0, 1];
//------------------------
const inquirer = require("inquirer");

inquirer.prompt([{
    type: 'input',
    name: 'name',
    message: 'What is your name?'
}]).then(function (answers) {
    return console.log(answers)
});
// const fs = require('fs');
// const generatePage = require('./src/page-template.js');

// const pageHTML = generatePage(userName, githubName);

// fs.writeFile('./index.html', pageHTML, function (error) {
//     if (error) {
//         throw new Error(error);
//     }
//     console.log('Portfolio complete! Check out index.html to see the output!');
// });