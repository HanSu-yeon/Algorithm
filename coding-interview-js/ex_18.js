/**
 * 문제: 두 개의 수로 특정 값 만들기
 * 링크: 저자 출제
 */

//내가 푼 방식
function solution(arr, target) {
  let answer = '';
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] + arr[j + 1] == target) {
        answer = 'true';
        return answer;
      }
    }
  }
  answer = 'false';
  return answer;
}

//다른 사람 풀이
//해시 활용:원소(key)-존재여부(0, 1)
function countSort(arr, k) {
  //1. 해시 테이블 생성 및 초기화
  const hashtable = new Array(k + 1).fill(0);
  for (const num of arr) {
    //현재 원소의 값이 k이하인 때에만 처리
    if (num <= k) {
      //현재 원소의 값을 인덱스로 해 해당 인덱스의 해시 테이블 값을 1로 설정
      hashtable[num] = 1;
    }
  }

  return hashtable;
}

function solution(arr, target) {
  const hashtable = countSort(arr, target);
  for (const num of arr) {
    const complement = target - num;
    //2.target에서 현재 원소를 뺀 값이 해시 테이블에 있는지 확인
    if (complement !== num && complement >= 0 && complement <= target && hashtable[complement] === 1) {
      return true;
    }
  }
  return false;
}
console.log(solution([2, 3, 5, 9], 10));
console.log(solution([1, 2, 3, 4, 8], 6));
