// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}
  ## Description
  ${data.description}
  ## Table of contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [Questions](#questions))
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [License](#license)
  * [Questions](#questions)
  
  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Credits


  ## Questions
  ${data.username}
  ${data.email}

  ## Contribution
  

  ## Tests
  ${data.tests}

  ## License
  Copyright <YEAR> <${data.username}>
  ${data.license}
`;
}

module.exports = generateMarkdown;
