'use strict';

const { promisify } = require('util');
const fs = require('fs');

const readFileAsync = promisify(fs.readFile);

module.exports = files => {
  new Promise((res, rej) => {
    let contents = [];
    for (let file of files) {
      readFileAsync(file).then(data => contents.push(data));
    }
    return contents;
  });
};
