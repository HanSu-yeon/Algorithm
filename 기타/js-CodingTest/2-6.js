function solution(arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length;
  //sum1: 행의 합 sum2:열의 합
  let sum1 = (sum2 = 0);

  for (let i = 0; i < n; i++) {
    //j for문 돌기전에 sum1,sum2를 0으로 초기화 해줘야 함 그래야 1행1열 저장되고 다음에 2행 2열 저장된다
    sum1 = sum2 = 0;
    for (let j = 0; j < n; j++) {
      sum1 += arr[i][j]; //행
      sum2 += arr[j][i]; //열
    }
    answer = Math.max(answer, sum1, sum2); //각 행의 합 10개(sum1),각 열의 합 10개(sum2), 기존값(answer)값 중 최대값을 answer에 저장한다
  }
  //대각선의 합
  sum1 = sum2 = 0; //초기화 해준다
  for (let i = 0; i < n; i++) {
    sum1 += arr[i][i]; //왼=>오 대각선
    sum2 += arr[i][n - i - 1]; //오=>왼 대각선
  }
  answer = Math.max(answer, sum1, sum2);
  return answer;
}

let arr = [
  //arr[0]  arr[0][0] :10 arr[0][1]:13
  [10, 13, 10, 12, 15],
  //arr[1]
  [12, 39, 30, 23, 11],
  //arr[2]
  [11, 25, 50, 53, 15],
  //arr[3]
  [19, 27, 29, 37, 27],
  //arr[4]
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));
//예시
//가로
//arr[0]= [10, 13, 10, 12, 15]
//=>arr[0][0]+arr[0][1]+arr[0][2]+arr[0][3]+arr[0][4]

//=>arr[0][0]+arr[0][1]+arr[0][2]+arr[0][3]+arr[0][4]
//=>arr[1][0]+arr[1][1]+arr[1][2]+arr[1][3]+arr[1][4]
//=>arr[2][0]+arr[2][1]+arr[2][2]+arr[2][3]+arr[2][4]
//=>arr[3][0]+arr[3][1]+arr[3][2]+arr[3][3]+arr[3][4]
//=>arr[4][0]+arr[4][1]+arr[4][2]+arr[4][3]+arr[4][4]
//세로
// arr[0][0]+arr[1][0]+arr[2][0]+arr[3][0]+arr[4][0]
// arr[0][1]+arr[1][1]+arr[2][1]+arr[3][1]+arr[4][1]
// arr[0][2]+arr[1][2]+arr[2][2]+arr[3][2]+arr[4][2]
// arr[0][3]+arr[1][3]+arr[2][3]+arr[3][3]+arr[4][3]
// arr[0][4]+arr[1][4]+arr[2][4]+arr[3][4]+arr[4][4]

//대각선
// arr[0][0]+arr[1][1]+arr[2][2]+arr[3][3]+arr[4][4] 왼오
// arr[0][4]+arr[1][3]+arr[2][2]+arr[3][1]+arr[4][0] 오왼
