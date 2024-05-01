const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Define the directory to search for files
const dir = path.join(__dirname, 'ES6_classes');

// List all JavaScript files in the specified directory that start with a digit
const files = fs.readdirSync(dir)
  .filter(file => file.match(/^[0-9].*\.js$/))
  .map(file => path.join(dir, file));

// Run ESLint on the matched files
execSync(`./node_modules/.bin/eslint ${files.join(' ')}`, { stdio: 'inherit' });
