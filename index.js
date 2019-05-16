'use strict';

const fileReader = require('./lib/reader.js');
const fileReaderAsync = require('./lib/reader-async.js');

// Obtain and assert input
let files = process.argv.slice(2);

if (!(files instanceof Array && files.length)) {
  throw new Error('Invalid Args');
}

console.log('Callback');
fileReader(files, (err, data) => {
  if (err) {
    throw err;
  }
  console.log('From Callback:', data);
});

console.log('Async/Await');
fileReaderAsync(files).then(data => console.log(data.toString().trim()));
