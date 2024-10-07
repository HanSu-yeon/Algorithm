/**
 * 문제: 문자열 해싱을 이용한 검색 함수 만들기
 * 링크: 저자 출제
 */

function hashTable(stringList) {
  const map = new Map();

  for (const str of stringList) {
    map.set(str, true);
  }
  return map;
}
function solution(stringList, queryList) {
  let answer = [];
  const hashtable = new hashTable(stringList);

  for (const query of queryList) {
    if (hashtable.get(query)) {
      answer.push(true);
    } else {
      answer.push(false);
    }
  }

  return answer;
}

//다른 사람 풀이
//polynomial hash(다항해시함수)를 구현한 부분
function polynomialHash(str) {
  //각 문자열을 숫자로 변환하는 역할을 함. 각 문자의 아스키코드 값을 기반으로 해시값을 계산함
  //해시 충돌을 줄이고 매우 긴 문자열에서도 적절하게 해시값을 계산하기 위함
  const p = 31; //소수
  const m = 1_000_000_007; //버킷 크기
  let hashValue = 0;
  for (let i = 0; i < str.length; i++) {
    hashValue = (hashValue * p + str.charCodeAt(i)) % m;
  }
  return hashValue;
}

function solution(stringList, queryList) {
  //stringList의 각 문자열에 대해 다항 해시값을 계산
  const hashList = stringList.map(str => polynomialHash(str));

  //queryList의 각 문자열이 stringList에 있는지 확인
  const result = [];
  for (const query of queryList) {
    const queryHash = polynomialHash(query);
    if (hashList.includes(queryHash)) {
      result.push(true);
    } else {
      result.push(false);
    }
  }
  return result;
}
console.log(solution(['apple', 'banana', 'cherry'], ['banana', 'kiwi', 'melon', 'apple']));
