//내가 푼 방식
function solution(arr) {
  let oddArr = [];
  let sum = 0;
  let minValue;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      //요소를 2로 나눴을때 나머지가 0이 아니면 홀수
      oddArr.push(arr[i]); //홀수값을 oddArr배열에 추가
      sum += arr[i]; //홀수들의 합 구하기
    }
  }

  minValue = Math.min(...oddArr); //홀수들 중 최소값 찾기

  return [sum, minValue];
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));

//다른 사람 풀이
function solution(arr) {
  let answer = [];
  let sum = 0,
    min = Number.MAX_SAFE_INTEGER; //min을 첫 번째 인덱스로 초기화할 수 없는 이유: 홀수가 아닐수도 있으니까

  for (let x of arr) {
    if (x % 2 === 1) {
      sum += x;
      if (x < min) min = x;
    }
  }
  answer.push(sum);
  answer.push(min);
  return answer;
}
