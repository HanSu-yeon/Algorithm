//문제49 최댓값 반환하기
const num = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function solution(num) {
  let answer;
  let max = Number.MIN_SAFE_INTEGER; //max의 임시값을 안전한 최소 정수 값으로 설정
  for (let i = 0; i < num.length; i++) {
    if (max < Number(num[i])) max = Number(num[i]);
  }
  answer = max;
  return answer;
}

console.log(solution(num));

//다른 사람 풀이
let numbers = prompt("10개의 숫자를 입력하세요")
  .split(" ")
  .map((n) => {
    return parseInt(n, 10);
  }); /*입력된 요소들을 split메서드를 사용해 공백을 기준으로 문자열을 배열로 나눠서 만들고 
map메서드를 통해 배열의 원소들을 숫자형으로 변환한다*/

numbers.sort((a, b) => {
  //sort함수를 사용해 내림차순으로 정렬
  return b - a;
});

console.log(numbers[0]); //numbers배열에서 첫번째 요소를 출력

//문제50 버블 정렬 구현
/*버블 정렬은 한 과정에 겨우 두 수의 위치를 서로 바꾸는 작업밖에 못하기 때문에 성능이 좋지 않다*/
/*result.length-1-i인 이유: result[j]와 result[j+1]을 비교할 예정이기 때문에 배열의 마지막 데이터를 포함하지 않아도 검색 대상에 포함되므로 1을 빼줘야 하고
두 번째로 각 회전이 끝날 때마다 마지막 데이터의 정렬이 끝나기 때문에 i를 빼줘야 한다
-1을 붙이는 이유: 만약 배열 길이가 5라고 했을 때 -1을 하지 않으면 비교할 때 result[5]>result[6]이 나와 배열의 인덱스 값을 벗어나게 된다. result[6]은 존재하지 않기 때문에 undefined가 될 것이다
undefined는 false라서 if 문이 실행되지 않고 알고리즘에 영향을 미치지도 않지만 이 부분을 고려해 -1을 붙여준 것이다*/
function bubble(arr) {
  let result = arr.slice(); //원본 배열 복사 (slice함수에 매개변수가 없다면, 앞의 배열을 그대로 복사해서 새로운 배열을 반환한다)

  for (let i = 0; i < result.length - 1; i++) {
    //순차적으로 비교하기 위한 반복문
    for (let j = 0; j < result.length - 1 - i; j++) {
      //끝까지 돌았을 때 다시 처음부터 비교하기 위한 반복문
      if (result[j] > result[j + 1]) {
        //두 수를 비교하여 앞 수가 뒷 수보다 크면
        let temp = result[j]; //두 수를 서로 바꿔준다
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    }
  }
  return result;
}

const items = prompt("입력해주세요.")
  .split(" ")
  .map((n) => {
    return parseInt(n, 10);
  });

console.log(bubble(items));
