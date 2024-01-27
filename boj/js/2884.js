let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');

let [H, M] = input[0].split(' ').map(Number);

if (M < 45) {
  if (H == 0) {
    H = 23;
  } else {
    H -= 1;
  }
  M += 15;
} else {
  M -= 45;
}
console.log(H, M);
