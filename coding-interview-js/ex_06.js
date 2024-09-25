/**
 * 문제: 실패율
 * 링크: https://school.programmers.co.kr/learn/courses/30/lessons/42889
 */

//내가 푼 방식
function solution(N, stages) {
  //스테이지별 도전자 수
  let challenger = Array.from({ length: N + 1 }, () => 0);
  for (let i = 0; i < stages.length; i++) {
    challenger[stages[i] - 1] += 1;
  }

  //실패율 구하기
  let failRateObj = {};
  let nums = stages.length;
  for (let i = 0; i < N; i++) {
    let fail = challenger[i] / nums;
    failRateObj[i] = fail;
    //다음 스테이지 실패율 구하기 위해 현재 스테이지 인원 뺌
    nums = nums - challenger[i];
  }

  let answer = [];
  //실패율 높은 스테이지부터 내림차순 정렬
  let sortedEntries = Object.entries(failRateObj).sort((a, b) => b[1] - a[1]);
  //스테이지 번호만 반환
  for (let arr of sortedEntries) {
    answer.push(Number(arr[0]) + 1);
  }
  return answer;
}

//다른 풀이
function solution(N, stages) {
  const challenger = new Array(N + 2).fill(0);
  for (const stage of stages) {
    challenger[stage] += 1;
  }

  const fails = {};
  let total = stages.length;
  for (let i = 1; i <= N; i++) {
    if (challenger[i] == 0) {
      //도전한 사람이 없는 경우, 실패율은 0
      fails[i] = 0;
      continue;
    }
    //실패율 계산
    fails[i] = challenger[i] / total;
    //다음 스테이지 실패율을 구하기 위해 현재 스테이지의 인원을 뺌
    total -= challenger[i];
  }
  //실패율이 높은 스테이지부터 내림차순으로 정렬
  const result = Object.entries(fails).sort((a, b) => b[1] - a[1]);
  //스테이지 번호만 반환
  return result.map(v => Number(v[0]));
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
console.log(solution(4, [4, 4, 4, 4]));
