// array of questions for user
var fs = require('fs');
var path = require("path");

var inquirer = require("inquirer");

var genMark = require("./utils/generateMarkdown");

const questions = [
  {
    type: "input",
    message: "Enter project name: ",
    name: "projectName"
  },
  {
    type: "input",
    message: "Enter username:",
    name: "username"
  },
  {
    type: "input",
    message: "Enter Email:",
    name: "email"
  },
  {
    type: "input",
    message: "Enter a description:",
    name: "description"
  },
  {
    type: "input",
    message: "Enter installation instructions:",
    name: "install"
  },
  {
    type: "input",
    message: "Enter usage info:",
    name: "usage"
  },
  {
    type: "input",
    message: "Enter contribution guidelines:",
    name: "contribution"
  },
  {
    type: "input",
    message: "Enter test instructions:",
    name: "tests"
  },
  {
    type: 'list',
    name: 'license',
    message: 'Pick a license:',
    choices: ["MIT", "Apache", "GNU"],
    default: "MIT"
  }
];

// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
  inquirer.prompt(questions)
    .then(function (response) {
      console.log(response);
      writeToFile("TestMe.md", genMark(response));
    })
}

// function call to initialize program
init();
