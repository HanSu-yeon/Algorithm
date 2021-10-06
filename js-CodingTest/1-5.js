// //내가 푼 방식
// Math.min.apply(첫번째인자로 객체넘기고,두번째인자에 배열을 넘김)
function solution(arr) {
  let answer = Math.min.apply(null, arr);
  return answer;
}

let arr = [5, 7, 1, 3, 2, 9, 11];

console.log(solution(arr));

//다른 방식1
// Number.MAX_SAFE_INTEGER 는 JS에서 안전한 최대 정수값을 나타낸다

function solution(arr) {
  let answer,
    min = Number.MAX_SAFE_INTEGER; //min의 임시값으로 큰 숫자로 초기화 해놓는다
  //또는 min=arr[0] 이렇게 배열의 첫번째 요소로 초기화해도 된다
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  answer = min; //for문을 다 돌아 min값이 확정되면 answer에 최종 min값을 할당한다
  return answer;
}

let arr = [5, 7, 1, 3, 2, 9, 11];

console.log(solution(arr));

//다른 방식2(내장 함수 사용)

function solution(arr) {
  let answer = Math.min(...arr); //... : 전개연산자(배열을 펼쳐줌 arr[0],arr[1]...)
  return answer;
}

let arr = [5, 7, 1, 3, 2, 9, 11];

console.log(solution(arr));
