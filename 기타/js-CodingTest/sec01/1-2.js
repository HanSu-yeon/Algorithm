//힌트:가장 긴 변의 길이가 다른 두 변의 길이의 합보다 크거나 같으면 삼각형 만들 수 x

//내가 푼 방식
function solution(a, b, c) {
  let answer;
  let max;

  if (a > b) {
    max = a;
    if (max < b + c) {
      answer = "YES";
    } else {
      answer = "NO";
    }
  } else {
    max = b;
    if (b < a + c) {
      answer = "YES";
    } else {
      answer = "NO";
    }
  }
  if (max < c) {
    max = c;
    if (c < a + b) {
      answer = "YES";
    } else {
      answer = "NO";
    }
  }
  return answer;
}
console.log(solution(13, 33, 17));

//다른 풀이

function solution(a, b, c) {
  let answer; //let answer, max; let문 하나에서 변수를 여러개 선언할 수 있다
  let max;
  let total = a + b + c; //a,b,c중 누가 max가 될지 모르고, 짧은 막대 두 개의 합을 구하기 위해 세 수를 합했음

  //max값 구하기
  if (a > b) max = a;
  else max = b;
  if (max < c) max = c;

  //total-max: 세 막대의 합에서 max를 뺀 값
  if (max < total - max) answer = "yes";
  else answer = "no";
  return answer;
}
console.log(solution(6, 7, 13));

//위 코드를 한번 더 정제

function solution(a, b, c) {
  let answer = "yes",
    max; //answer에 미리 yes값을 넣어둔다
  let total = a + b + c;

  if (a > b) max = a;
  else max = b;
  if (max < c) max = c;

  if (total - max <= max) answer = "no"; //이 조건이 거짓이라면 answer에 yes가 그대로 있을 거다
  return answer;
}
console.log(solution(13, 33, 17));
