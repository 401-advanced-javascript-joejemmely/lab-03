'use strict';

const { promisify } = require('util');
const fs = require('fs');

const readFileAsync = promisify(fs.readFile);

module.exports = async files => {
  let contents = [];
  for (let file of files) {
    const data = await readFileAsync(file);
    contents.push(data);
  }
  return contents;
};
