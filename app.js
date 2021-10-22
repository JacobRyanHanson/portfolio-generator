// Descructuring example.
// let a, b;
// [a, b] = [0, 1];
//------------------------
const inquirer = require("inquirer");

const fs = require("fs");
const generatePage = require("./src/page-template.js");

promptUser().then(promptProject).then(function (portfolioData) {
    const pageHTML = generatePage(portfolioData);

    fs.writeFile("./index.html", pageHTML, function (error) {
        if (error) {
            throw new Error(error);
        }
    });
});

function promptUser() {
    return inquirer.prompt([{
            type: "input",
            name: "name",
            message: "What is your name? (Required)",
            validate: function (nameInput) {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter your name!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "github",
            message: "Enter your GitHub Username (Required)",
            validate: function (githubInput) {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please enter your GitHub Username!");
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAbout',
            message: 'Would you like to enter some information about yourself for an "About" section?',
            default: true
        },
        {
            type: "input",
            name: "about",
            message: "Provide some information about yourself:",
            when: function ({
                confirmAbout
            }) {
                if (confirmAbout) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    ]);
}

function promptProject(portfolioData) {
    if (!portfolioData.projects) {
        portfolioData.projects = [];
    }
    console.log(`
=================
Add a New Project
=================
`);
    return inquirer.prompt([{
            type: "input",
            name: "name",
            message: "What is the name of your project? (Required)",
            validate: function (githubInput) {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please enter the name of your project!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "description",
            message: "Provide a description of the project (Required)",
            validate: function (githubInput) {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please enter a description of the project!");
                    return false;
                }
            }
        },
        {
            type: "checkbox",
            name: "languages",
            message: "What did you build this project with? (Check all that apply)",
            choices: ["JavaScript", "HTML", "CSS", "ES6", "jQuery", "Bootstrap", "Node"]
        },
        {
            type: "input",
            name: "link",
            message: "Enter the GitHub link to your project. (Required)",
            validate: function (githubInput) {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please enter the GitHub link to your project!");
                    return false;
                }
            }
        },
        {
            type: "confirm",
            name: "feature",
            message: "Would you like to feature this project?",
            default: false
        },
        {
            type: "confirm",
            name: "confirmAddProject",
            message: "Would you like to enter another project?",
            default: false
        }
    ]).then(function (projectData) {
        portfolioData.projects.push(projectData);
        if (projectData.confirmAddProject) {
            return promptProject(portfolioData);
        } else {
            return portfolioData;
        }
    });
}