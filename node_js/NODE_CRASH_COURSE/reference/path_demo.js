// https://nodejs.org/docs/latest-v11.x/api/path.html
const path = require('path'); // npm install path NOT required since this is a core module

console.log(__dirname);
console.log(__filename);

// Base file name
console.log(path.basename(__filename));

// Directory name
console.log(path.dirname(__filename));

// File extension 
console.log(path.extname(__filename));

// Create path object 
console.log(path.parse(__filename));

/*
{ root: '/',
  dir:
   '/Users/chester/Development/kamatoro64/full-stack-development/node_js/NODE_CRASH_COURSE/reference',
  base: 'path_demo.js',
  ext: '.js',
  name: 'path_demo' }
*/

// Concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html'));


