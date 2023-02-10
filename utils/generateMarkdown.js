// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license){
    return ''
  } else if (license === 'Apache 2.0 License'){
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]'
  } else if (license === 'GNU General Public License v3.0'){
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]'
  } else if (license === 'MIT License'){
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license){
    return ''
  } else if (license === 'Apache 2.0 License'){
    return '[License](https://www.apache.org/licenses/LICENSE-2.0)'
  } else if (license === 'GNU General Public License v3.0'){
    return '[License: GPL v3](https://www.gnu.org/licenses/gpl-3.0.en.html)'
  } else if (license === 'MIT License'){
    return '[License: MIT](https://opensource.org/licenses/MIT)'
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, year, name, program) {
  let licenseTxt = ''
  if(!license){
    return ''
  } else if (license === 'Apache 2.0 License'){
    return `Copyright ${year} ${name}\nLicensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at \n\nhttp://www.apache.org/licenses/LICENSE-2.0 \n \nUnless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.`
  } else if (license === 'GNU General Public License v3.0'){
    return `<${program}> \nCopyright (C) ${year} ${name}\n\nThis program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.\n\nThis program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.\n\nYou should have received a copy of the GNU General Public License along with this program.  If not, see <https://www.gnu.org/licenses/>`
  } else if (license === 'MIT License'){
    return `Copyright ${year} ${name}\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const { project, description, installation, usage, licenseInfoYear: year, licenseInfoName: name, contributing, test, questionGithub: github, questionEmail: email } = data
  const [license] = data.license
  return `# ${project} ${renderLicenseBadge(license)}\n
  ## Description\n
  ${description}\n
  ---
  ## Table of Contents \n
  - [Installation](#instlalation)
  - [Usage](#usage)
  - [License](#license) 
  - [Contributing](#contributing)
  - [Test](#test)
  - [Questions](#questions)
  ---\n
  ## Installation\n
  ${installation}\n
  ## Usage \n
  ${usage}\n
  ## License\n
  ${renderLicenseLink(license)}\n
  ${renderLicenseSection(license, year, name, project)}\n
  ## Contributing\n
  ${contributing}\n
  ## Test\n
  ${test}\n
  ## Questions\n
  If there are any persisting questions, please contact me at ${email}. If you would like to look at my other projects, please look at my GitHub account at [${github}](https://github.com/${github}).  `;
}

module.exports = generateMarkdown;
