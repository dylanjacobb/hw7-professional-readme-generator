// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
// replaced const with .prompt because that's what I mostly practiced with
const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Enter your project description here:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Enter your projects installation instructions here:',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Enter your projects usage information here:',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Enter your projects contribution guidelines here:',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Enter your projects test instructions here:',
        name: 'tests',
    },
    {
        type: 'list',
        message: 'Please select a license',
        choices: [
            'MIT',
            'GNU GPL v3',
            'Apache 2.0',
        ],
        name: 'license',
    },
    {
        type: 'input',
        message: 'Enter your GitHub username here:',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Enter your email address here:',
        name: 'email',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Your README has been successfully created!')
    );
}

// TODO: Create a function to initialize app
function init() { 
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile('README.md', generateMarkdown(data));
    })

}

// Function call to initialize app
init();









// GIVEN a command-line application that accepts user input

// TODO: WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions


// TODO: WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

// TODO:WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

// TODO: WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

