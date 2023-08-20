// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  }
  else if (license === 'Apache') {
    return '[![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  }
  else if (license === 'GPL') {
    return '[![License: GPL](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  }
  return '';
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return '[MIT License](https://opensource.org/licenses/MIT)';
  }
  else if (license === 'Apache') {
    return '[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)';
  } 
  else if (license === 'GPL') {
    return '[GPL v3 License](https://www.gnu.org/licenses/gpl-3.0)';
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `This application is covered under the ${renderLicenseLink(license)}.`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  ${renderLicenseBadge(data.license)}
  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  For questions, contact me at ${data.email}. Visit my [GitHub profile](https://github.com/${data.username}).

`;
}

module.exports = generateMarkdown;
