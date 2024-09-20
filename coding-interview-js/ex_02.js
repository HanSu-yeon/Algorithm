/**
 * 문제: 배열 제어하기
 */

function solution(arr) {
  const uniiqueArr = [...new Set(arr)]; //중복값 제거
  uniiqueArr.sort((a, b) => b - a); //내림차순 정렬
  return uniiqueArr;
}

console.log(solution([4, 2, 2, 1, 3, 4]));
console.log(solution([2, 1, 1, 3, 2, 5, 4]));
