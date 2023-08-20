// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'title',
        message: 'What is the project title?'
    },
    {
        name: 'description',
        message: 'Describe the project:'
    },
    {
        name: 'installation',
        message: 'What are the installation instructions?'
    },
    {
        name: 'usage',
        message: 'What is the usage information?'
    },
    {
        name: 'contributing',
        message: 'Who contributed to the project?'
    },
    {
        name: 'tests',
        message: 'What are the test instructions?'
    },
    {
        name: 'license',
        message: 'Choose a license for your application:',
        type: 'list',
        choices: ['MIT', 'Apache', 'GPL', 'None']
    },
    {
        name: 'username',
        message: 'What is your GitHub username?'
    },
    {
        name: 'email',
        message: 'What is your email address?'
    }   
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
    console.log('README.md generated successfully!');
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
      const markdownContent = generateMarkdown(answers);
      writeToFile('README.md', markdownContent);
    })
    .catch((error) => console.error(error));
}

// Function call to initialize app
init();
