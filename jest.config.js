const {defaults} = require('jest-config');
const path = require('path');


module.exports = {
  ...defaults, 
  testEnvironmentOptions: { // Extending environment used such as node or jsdom, each file is run with specific environment by appendic docblock at the very top of the file
     ...defaults.testEnvironmentOptions,
     url: path.resolve("src/client/views/index.html") // because its not starting with / this will append cwd at the beginning
  }
};