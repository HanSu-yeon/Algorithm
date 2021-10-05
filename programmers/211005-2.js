//내가 푼 방식
function solution(n) {
  var answer = 0;
  const str = String(n).split(""); //숫자n을 문자열로 바꾸고 글자별로 잘라서 배열에 담기
  for (let i = 0; i < str.length; i++) {
    answer += Number(str[i]); //str[i]인덱스의 요소를 숫자로 바꿔 answer에 더한다
  }
  return answer;
}

console.log(solution(123));
console.log(solution(987));

//다른 사람 풀이
function solution(n) {
  return (n + "").split("").reduce((acc, curr) => acc + parseInt(curr), 0);
}
