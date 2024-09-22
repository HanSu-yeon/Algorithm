/**
 * 문제: 모의고사
 * 링크: https://school.programmers.co.kr/learn/courses/30/lessons/42840
 */

// 반복문을 통해 정답과 찍은답을 비교함
// 총 맞은 개수를 카운팅
// 학생별 맞힌 개수 비교 후 배열에 추가
// 오름차순으로 반환

//내가 푼 방식
function solution(answers) {
  //수포자별 찍기 패턴
  let student1 = [1, 2, 3, 4, 5];
  let student2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let student3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  //수포자별 맞힌 문제수 카운트
  let cnt1 = 0;
  let cnt2 = 0;
  let cnt3 = 0;
  let corretCntArr = [];
  let res = [];

  //수포자1의 맞힌 문제수
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] == student1[i % student1.length]) {
      cnt1++;
    }
  }

  //수포자2의 맞힌 문제수
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] == student2[i % student2.length]) {
      cnt2++;
    }
  }
  //수포자3의 맞힌 문제수
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] == student3[i % student3.length]) {
      cnt3++;
    }
  }

  //수포자들의 맞힌 문제수를 한 배열에 저장
  corretCntArr.push(cnt1);
  corretCntArr.push(cnt2);
  corretCntArr.push(cnt3);

  //가장 많이 맞춘 문제수
  let maxCnt = Math.max(...corretCntArr);
  //가장 많은 문제를 맞힌 수포자들의 번호를 배열에 저장
  for (i = 0; i < corretCntArr.length; i++) {
    if (maxCnt <= corretCntArr[i]) {
      res.push(i + 1);
    }
  }
  return res;
}

//다른 풀이
/**
 * 시간 복잡도: O(N)
 * N: answers의 길이
 *
 * - 3번의 시간복잡도는 O(N)
 *  - 외부 루프: answers의 길이만큼 반복 = n번 => O(N)
 *  - 내부 루프: 패턴(patterns)의 길이만큼 반복 = 3번 => 즉, O(1)(상수 시간)
 * - 6번의 시간복잡도는 O(1)
 *  - scores의 길이만큼 반복 = 3번 => O(1)(상수 시간)
 * => 최종 시간복잡도 O(N) = O(N) x O(1)
 */
function solution(answers) {
  const student1 = [1, 2, 3, 4, 5];
  const student2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const student3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  //1.수포자들의 패턴을 하나의 배열에 저장
  const patterns = [student1, student2, student3];

  //2.수포자들의 점수를 저장할 배열
  const scores = [0, 0, 0];

  //3.각 수포자의 패턴과 정답이 얼마나 일치하는지 확인
  for (const [i, answer] of answers.entries()) {
    for (const [j, pattern] of patterns.entries()) {
      //4.정답 길이가 수포자의 답 길이보다 긴 경우 수포자의 처음 요소와 비교할 수 있도록 나머지 연산자 사용
      if (answer === pattern[i % pattern.length]) {
        scores[j] += 1;
      }
    }
  }

  //5.가장 높은 점수 저장
  const maxScore = Math.max(...scores);

  //6.가장 높은 점수를 받은 수포자들의 번호를 찾아서 배열에 담음
  const highestScores = [];
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] === maxScore) {
      highestScores.push(i + 1);
    }
  }

  return highestScores;
}

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 3, 2, 4, 2]));
console.log(solution([1, 3, 2, 4, 2, 1, 2, 3, 4, 5]));
