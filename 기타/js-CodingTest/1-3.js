//내가 푼 방식

function solution(n) {
  let answer = parseInt(n / 12); //필요한 연필의 다스 수 구하는 식
  if (n % 12 !== 0) answer = answer + 1; //나머지(=못 받는 학생수)가 나온다면 한 다스 추가해 준다
  //왜냐면 모든 학생들이게 한 자루씩 나눠줘야 되기 때문에
  //else면 answer에 미리 들어있는 값이 return
  return answer;
}

console.log(solution(178));

//다른 풀이

// ceil: 올림;
// floor: 내림;
// round: 반올림;
// sqrt: 제곱근;

function solution(n) {
  let answer = Math.ceil(n / 12);

  return answer;
}

console.log(solution(178));
