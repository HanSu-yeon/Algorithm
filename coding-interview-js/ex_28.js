/**
 * 문제: 예상 대진표
 * 링크: https://school.programmers.co.kr/learn/courses/30/lessons/12985?language=javascript
 */

/**
 * 토너먼트 방식으로 두 플레이어가 언젠가 만날 때까지 매 라운드 서로 경기하며, 이를 반복해 최종적으로 두 플레이어가 한 경기에서 만날 때 라운드를 구하는 문제
 * 1. 다음 라운드 번호
 *  - 참가자 번호가 홀수: (번호+1)/2
 *  - 참가자 번호가 짝수: 번호/2
 * 2. 두 참가자가 언제 만나게 되는지
 *  - 다음 라운드의 번호가 같을 때
 * 3. 라운드 카운트
 */

function solution(n, a, b) {
  let round = 0;
  while (a !== b) {
    if (a % 2 == 0) {
      a = a / 2;
    } else {
      a = (a + 1) / 2;
    }
    if (b % 2 == 0) {
      b = b / 2;
    } else {
      b = (b + 1) / 2;
    }

    round++;
  }
  return round;
}

//다른 사람 풀이
function solution(n, a, b) {
  let round = 0;
  while (a !== b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    round++;
  }
  return round;
}
console.log(solution(8, 4, 7));
