/**
 * 문제: 폰켓몬
 * 링크: https://school.programmers.co.kr/learn/courses/30/lessons/1845
 */

//가장 많은 종류의 폰켓몬 종류 수를 반환하는 문제
function solution(nums) {
  const set = new Set(nums);
  //가져갈 수 있는 폰켓몬 종류
  let poketmonCnt = nums.length / 2;
  //폰켓몬 종류
  let kind = set.size;
  //가져갈 수 있는 폰켓몬의 수 < 폰켓몬 종류
  if (poketmonCnt < kind) {
    return poketmonCnt;
  } else {
    return kind;
  }
  //위 조건문을 아래처럼 바꿔 사용할 수 있음
  //return Math.min(poketmonCnt, kind);
}

console.log(solution([3, 1, 2, 3]));
console.log(solution([3, 3, 3, 2, 2, 4]));
