//평균 구하기
//내가 푼 풀이
function solution(arr) {
  let answer = 0;

  for (let i = 0; i < arr.length; i++) {
    answer += arr[i];
  }
  return answer / arr.length;
}

console.log(solution([1, 2, 3, 4]));
console.log(solution([5, 5]));

//reduce사용해 풀어보기
function solution(arr) {
  let answer;
  answer =
    arr.reduce((acc, cur) => {
      return acc + cur;
    }, 0) / arr.length;
  return answer;
}

console.log(solution([1, 2, 3, 4]));
// //다른 사람 풀이
function average(array) {
  return array.reduce((a, b) => a + b) / array.length;
}
var testArray = [5, 3, 4];
console.log("평균값 : " + average(testArray));
