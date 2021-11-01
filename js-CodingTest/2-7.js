//답 참고(리뷰필요)
function solution(arr) {
  let answer = 0;
  let n = arr.length;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let flag = 1; //봉우리인지 아닌지 체크
      for (let k = 0; k < 4; k++) {
        //상하좌우 비교하니까 4번 돈다
        let nx = i + dx[k]; //(비교하려는)행좌표
        let ny = j + dy[k]; //(비교하려는)열좌표
        if (
          nx >= 0 &&
          nx < n &&
          ny >= 0 &&
          ny < n &&
          arr[nx][ny] >= arr[i][j]
        ) {
          flag = 0;
          break;
        }
      }
      if (flag) answer++; //flag가 1(참)이면 카운팅 아니면 카운팅 x
    }
  }
  return answer;
}

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(arr));
