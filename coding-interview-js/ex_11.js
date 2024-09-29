//문제: 짝지어 제거하기
//링크: https://school.programmers.co.kr/learn/courses/30/lessons/12973

//내가 푼 방식(오답!!)
//⚠️채점했을때 효율성 테스트에서 통과 못함
function solution(S) {
  let str = S;
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) {
      let duplication = str.slice(i, i + 2);
      str = str.replace(duplication, '');
      //문자열을 처음부터 탐색하기 위해 i를 0으로 초기화 시킴
      i = -1;
    }
  }

  if (str.length === 0) {
    return 1;
  } else {
    return 0;
  }
}

//다른 풀이
function solution(s) {
  const stack = [];

  for (const c of s) {
    //스택이 비어 있지 않고, 현재 문자와 스택의 맨 위 문자가 같으면
    if (stack.length > 0 && stack[stack.length - 1] === c) {
      //스택의 맨 위 문자 제거
      stack.pop();
    } else {
      //스택에 현재 문자 추가
      stack.push(c);
    }
  }

  return stack.length === 0 ? 1 : 0;
}

console.log(solution('baabaa'));
console.log(solution('cdcd'));
