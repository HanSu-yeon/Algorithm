//세 수 중 최솟값

function solution(a, b, c) {
  let answer;
  if (a < b) answer = a;
  //a와 b를 비교=>a가 작다면 answer는 a
  else answer = b; //조건이 거짓이라면 answer는 b
  if (c < answer) answer = c; //위에서 필터링된 answer와 c를 비교=> c가 작다면 answer는 c
  return answer;
}

console.log(solution(2, 5, 1));
