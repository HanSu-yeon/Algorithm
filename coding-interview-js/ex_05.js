/**
 * 문제: 행렬의 곱셈
 * 링크: https://school.programmers.co.kr/learn/courses/30/lessons/12949
 */
function solution(arr1, arr2) {
  //결과를 저장할 2차원 배열 초기화
  //행렬의 크기: arr1의 행 개수 x arr2의 열 개수
  var answer = Array.from(Array(arr1.length), () => new Array(arr2[0].length));

  //행렬의 곱 구하는 반복문
  //arr1 행렬의 각 행에 대해 반복
  for (let i = 0; i < arr1.length; i++) {
    //arr2 행렬의 각 열에 대해 반복
    for (let j = 0; j < arr2[0].length; j++) {
      //arr1의 한 행과 arr2의 한 열에 대응되는 값을 곱하고 더함
      for (let k = 0; k < arr2.length; k++) {
        //console.log(`(${i},${k}) * (${k},${j})`);
        answer[i][j] += arr1[i][k] * arr2[k][j];
      }
    }
  }

  return answer;
}

console.log(
  solution(
    [
      [1, 4],
      [3, 2],
      [4, 1],
    ],
    [
      [3, 3],
      [3, 3],
    ]
  )
);
