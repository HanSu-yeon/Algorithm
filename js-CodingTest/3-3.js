/*참고: 정규식 사용하여 왼쪽에 붙은 0 제거하기
let a='01930'
let b=a.replace(/(^0+)/, "") =>1930
*/
//내가 푼 방식
/*왼쪽에 있는 0을 제거 하고 싶어 정규 표현식을 사용했었는데 
parseInt를 사용해 숫자로 바꾸면 알아서 0이 지워진다는 걸 알았음*/
function solution(str) {
  let answer = "";
  str = str.replace(/[^0-9]/g, "");
  answer = parseInt(str);

  return answer;
}
let str = "g0e00n2T0s8eSoft";
console.log(solution(str));

//다른 사람 풀이1
// isNaN(value) : 매개변수가 숫자인지 검사하는 함수. 숫자면 false, 숫자가 아니면 true반환

function solution(str) {
  let answer = "";
  for (let x of str) {
    if (!isNaN(x)) answer += x;
  }

  return parseInt(answer);
}

//풀이2 만약 parseInt()를 쓰지 말라 했을 때
function solution(str) {
  let answer = 0;
  for (let x of str) {
    if (!isNaN(x)) answer = answer * 10 + Number(x);
  }

  return answer;
}
