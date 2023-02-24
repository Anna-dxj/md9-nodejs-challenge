const generateMarkdown = require('./utils/generateMarkdown');

const inquirer = require('inquirer'), fs = require('fs');

const questions = [
    {
        name: 'project',
        type: 'input',
        message: 'What is the name of your project?'
    }, {
        name: 'description',
        type: 'input',
        message: 'Please describe your project'
    }, {
        name: 'installation',
        type: 'input',
        message: 'What are the installation instructions for your project?',
    }, {
        name: 'usage',
        type: 'input',
        message: 'What are the usage instructions for your project?'
    }, {
        name: 'license',
        type: 'checkbox',
        message: 'What license would you like to use for your project? If you are unsure or unfamiliar, please read the Terms of the right to your software.',
        choices: ['Apache License v2.0', 'GNU General Public License v3.0', 'MIT License']
    }, {
        name: 'licenseInfoName',
        type: 'input',
        message: 'What is your name (name of copyright owner)?'
    }, {
        name: 'licenseInfoYear',
        type: 'number',
        message: 'What is the year?'
    }, {
        name: 'contributing',
        type: 'input',
        message: 'Please complete the contribution section of the ReadMe. This section will look like the following: "The following is a list of constributors and their contribution:"'
    }, {
        name: 'test',
        type: 'input',
        message: 'What tests would you like to include?'
    }, {
        name: 'questionGithub',
        type: 'input',
        message: 'Please provide your GitHub account name.'
    }, {
        name: 'questionEmail',
        type: 'input',
        message: 'In case another developer wishes to contact you regarding your project, what email would you like to provide?'
    },
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (error) => {
        if(error){console.log(error)}
    })
}
function init() {
    inquirer.prompt(questions)
        .then((response) => {
            const readme = 'README.md';
            writeToFile(readme, response)
        })
}

// Function call to initialize app
init();
