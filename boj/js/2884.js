let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');

let [H, M] = input[0].split(' ').map(Number);

if (M < 45) {
  //분이 45분 미만이라면

  H -= 1;
  M += 15;
  if (H < 0) {
    H = 23;
  }
} else {
  M -= 45;
}
console.log(H, M);
