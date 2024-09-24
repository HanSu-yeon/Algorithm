/**
 * 문제: 실패율
 * 링크: https://school.programmers.co.kr/learn/courses/30/lessons/42889
 */

function solution(N, stages) {
  //스테이지별 도전자 수
  let stagesCntArr = Array.from({ length: N + 1 }, () => 0);
  for (let i = 0; i < stages.length; i++) {
    stagesCntArr[stages[i] - 1] += 1;
  }

  //실패율 구하기
  let failRateObj = {};
  let nums = stages.length;
  for (let i = 0; i < N; i++) {
    let fail = stagesCntArr[i] / nums;
    failRateObj[i] = fail;
    nums = nums - stagesCntArr[i];
  }

  // //정렬
  let answer = [];

  let sortedEntries = Object.entries(failRateObj).sort((a, b) => b[1] - a[1]);

  for (const [idx, arr] of sortedEntries.entries()) {
    answer.push(Number(arr[0]) + 1);
  }

  return answer;
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
console.log(solution(4, [4, 4, 4, 4]));
