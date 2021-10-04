function solution(num) {
  var answer = "Even";
  if (num % 2 === 0) {
    return answer;
  } else {
    answer = "Odd";
    return answer;
  }
}

console.log(solution(3));
console.log(solution(4));

//다른 사람 풀이
//*참고* ==0을 쓰면 짝수냐는 조건문이고, 아래식 자체로는(==1 홀수냐)는 질문이 암시된 조건문이다
function evenOrOdd(num) {
  return num % 2 ? "Odd" : "Even";
}
console.log(evenOrOdd(3));
console.log(evenOrOdd(4));
console.log(evenOrOdd(-2)); //-2 % 2 를 하면 -0이 나오는데, -0은 자바스크립트가 false로 보는 7가지(-0,0,null,undefined,false,'',NaN) 중 하나이다
