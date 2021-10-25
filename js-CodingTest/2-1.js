function solution(arr) {
  let answer = [];
  answer.push(arr[0]); //첫 번째 수는 무조건 출력
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) answer.push(arr[i]);
  }
  return answer;
}

const arr = [7, 3, 9, 5, 6, 12];
console.log(solution(arr));
