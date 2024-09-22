/**
 * 문제: 두 개 뽑아서 더하기
 * 링크: https://school.programmers.co.kr/learn/courses/30/lessons/68644
 */

https: function solution(arr) {
  let sumArray = [];
  // 1.서로 다른 위치에 있는 두 수 더함
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      //2. 더한 결과를 새로운 배열에 추가
      sumArray.push(arr[i] + arr[j]);
    }
  }
  // 3.새로운 배열에서 중복값 제거
  let newArray = [...new Set(sumArray)];
  // 4.배열을 오름차순으로 정렬 후 반환
  let res = newArray.sort((a, b) => a - b);
  return res;
}

console.log(solution([2, 1, 3, 4, 1]));
console.log(solution([5, 0, 2, 7]));
