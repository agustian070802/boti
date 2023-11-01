const fs = require('fs')
const readdir = require('fs/promises')

const readline = require('readline')
const countLinesInFile = require('count-lines-in-file')
// Specify the file path and separator
const dirIg = 'C:/Users/Win 10/Desktop/nodeBot/driver/Profile/instagram'
const filePath = './asd.txt';
const separator = ';'; // Change this to your desired separator



var array = fs.readFileSync(filePath, 'utf8').split('\n');
console.log(array[1])



const profiles = fs.readdirSync(dirIg).length





