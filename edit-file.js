'use strict';

const { promisify } = require('util');
const fs = require('fs');

// Promisify the functions
const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);

const files = process.argv.slice(2);

const randomNumber = Math.random();

async function readUpdateAndReread(file) {
  try {
    // Read
    const contentBefore = await readFileAsync(file, { encoding: 'utf8' });
    console.log('Content before:', contentBefore);

    // Update
    await writeFileAsync(file, randomNumber);

    // Read again
    const contentAfter = await readFileAsync(file, { encoding: 'utf8' });
    console.log('Content after:', contentAfter);
  } catch (err) {
    console.log('Error:', err);
  }
}

readUpdateAndReread(files[0]);
