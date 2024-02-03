function solution(n, arr) {
  let answer = [];
  for (let i = 0; i < n; i++) {
    if (i == 0) {
      answer.push(arr[i]);
    } else {
      if (arr[i] > arr[i - 1]) {
        answer.push(arr[i]);
      }
    }
  }
  return answer;
}

console.log(solution(6, [7, 3, 9, 5, 6, 12]));
