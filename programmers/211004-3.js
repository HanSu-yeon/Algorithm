//정수 내림차순

//내 방식
function solution(n) {
  let answer;
  let arr = String(n).split("");
  answer = arr.sort(function (a, b) {
    return b - a;
  });

  return parseInt(answer.join(""));
}

//다른 사람 풀이
function solution(n) {
  const newNum = n + "";
  let newArr = newNum.split("").sort().reverse().join("");

  return +newArr; //단항 연산자 +를 사용하여 값을 숫자로 변환 할 수도 있다
}
console.log(solution(118372));
