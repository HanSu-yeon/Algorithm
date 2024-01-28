let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');

const [a, b, c] = input[0].split(' ').map(Number);

if (a == b && b == c) {
  console.log(10000 + a * 1000);
} else if (a == b && a != c) {
  console.log(1000 + a * 100);
} else if (a != b && a == c) {
  console.log(1000 + a * 100);
} else if (a != b && b == c) {
  console.log(1000 + b * 100);
} else {
  const maxNum = Math.max(a, b, c);
  console.log(100 * maxNum);
}
