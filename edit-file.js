'use strict';

const { promisify } = require('util');
const fs = require('fs');

// Promisify the functions
const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);

const files = process.argv.slice(2);
const file = files[0];

const randomNumber = Math.random();

(async function readUpdateAndReread() {
  try {
    // Read
    const contentBefore = await readFileAsync(file);
    console.log('Content before:', contentBefore.toString().trim());

    // Update
    await writeFileAsync(file, randomNumber);

    // Read again
    const contentAfter = await readFileAsync(file);
    console.log('Content after:', contentAfter.toString().trim());
  } catch (err) {
    console.log('Error:', err);
  }
})();
