const fs = require('fs');
const [n,k] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);


function solution(N, K) {
  let queue = [];
  let answer = []
  //queue 초깃값 세팅
  for (let i = 1; i <= N; i++) {
    queue.push(i);
  }

  while (queue.length !== 0) {
    for (let j = 0; j < K - 1; j++) {
      let rear = queue.shift();
      queue.push(rear);
    }
    let front = queue.shift();
    answer.push(front);
  }

  console.log(`<${answer.join(', ')}>`)
}

solution(n,k)