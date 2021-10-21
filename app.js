const fs = require('fs');
const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2, process.argv.length);
const [userName, githubName] = profileDataArgs; // Destructure assignment.

fs.writeFile('./index.html', generatePage(userName, githubName), function (error) {
    if (error) {
        throw new Error(error);
    }

    console.log('Portfolio complete! Check out index.html to see the output!');
});

