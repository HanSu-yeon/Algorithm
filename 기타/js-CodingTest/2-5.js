//다른 사람 풀이

function solution(arr) {
  let n = arr.length; //5
  let answer = Array.from({ length: n }, () => 1); //0~n번 인덱스를 가진 배열이 생김, ()=>1: 1로 초기화(콜백함수)  //answer=[ 1, 1, 1, 1, 1 ]
  /*i=0일 떄 j=0~4까지 돌면서 값을 비교한다 arr[j]가 arr[i]보다 크다면 answer[i]에 1더해줌 */
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[j] > arr[i]) answer[i]++;
    }
  }
  return answer;
}

let arr = [87, 89, 92, 100, 76];
let arr2 = [87, 89, 92, 100, 76, 100];
console.log(solution(arr));
console.log(solution(arr2));
