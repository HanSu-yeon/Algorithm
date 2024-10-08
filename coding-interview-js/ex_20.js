/**
 * 문제: 완주하지 못한 선수
 * 링크: https://school.programmers.co.kr/learn/courses/30/lessons/42576
 */
function solution(participant, completion) {
  //참가자를 해시에 저장
  //key: 참가자명, value: 참가자명 수
  let participantHash = new Map();
  for (const p of participant) {
    if (participantHash.has(p)) {
      let newVal = participantHash.get(p) + 1;
      participantHash.set(p, newVal);
    } else {
      participantHash.set(p, 1);
    }
  }
  // console.log(participantHash);
  for (const c of completion) {
    //참가자 해시테이블에서 완주한 선수 이름으로 찾아 값을 1씩 줄임
    let getVal = participantHash.get(c);
    participantHash.set(c, getVal - 1);
  }
  //해시를 순회해 value가 0이 아닌 key를 반환함
  for (const [key, value] of participantHash) {
    if (value > 0) {
      return key;
    }
  }
}

console.log(solution(['leo', 'kiki', 'eden'], ['eden', 'kiki']));
console.log(solution(['marina', 'josipa', 'nikola', 'vinko', 'filipa'], ['josipa', 'filipa', 'marina', 'nikola']));
console.log(solution(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav']));
