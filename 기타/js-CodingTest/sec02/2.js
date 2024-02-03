function solution(n, arr) {
  let answer = [];
  answer.push(arr[0]);

  for (let i = 1; i < n; i++) {
    if (answer[answer.length - 1] < arr[i]) {
      answer.push(arr[i]);
    }
  }
  return answer.length;
}

console.log(solution(8, [130, 135, 148, 140, 145, 150, 150, 153]));

//다른 풀이
function solution(n, arr) {
  let maxheight = arr[0];
  let cnt = 1;
  for (let i = 1; i < n; i++) {
    if (maxheight < arr[i]) {
      cnt++;
      maxheight = arr[i];
    }
  }
  return cnt;
}

console.log(solution(8, [130, 135, 148, 140, 145, 150, 150, 153]));
