let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');

let score = Number(input[0]);

if (90 <= score) console.log('A');
else if (80 <= score) console.log('B');
else if (70 <= score) console.log('C');
else if (60 <= score) console.log('D');
else console.log('F');
