//내가 푼 방식
function solution(s, t) {
  let answer = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === t) {
      answer += 1;
    }
  }
  return answer;
}

let str = "COMPUTERPROGRAMMING";
console.log(solution(str, "R"));

//다른 사람 풀이1
function solution(s, t) {
  let answer = 0;
  for (let x of s) {
    if (x === t) answer++;
  }
  return answer;
}

//다른 사람 풀이2 내장함수 사용

function solution(s, t) {
  let answer = s.split(t).length; //split함수를 사용해 찾을 문자를 구분자로 해 입력된 문자를 배열로 만든다
  return answer - 1; //구분자('R')보다 문자열은 하나 더 생기기 때문에 -1해준다
}

let str = "COMPUTERPROGRAMMING";
console.log(solution(str, "R"));

/*let answer=s.split(t) 해서 answer를 리턴하면 'R'을 구분자로 해서 배열로 만든다 =>['COMPUTE', 'P', 'OG', 'AMMING']
구분자(R)이 3개니까 문자열은 하나 더 생겨 4개로 나오기 때문에 답을 리턴할 때는 -1을 해줘야 한다 
만약 COMPUTERPROGRAMMINGR 찾고싶은 문자 R이 문자열 끝에 있을때는 -1 하지 말아야 하는 거 아닌가??? 
콘솔에 찍어보면 ['COMPUTE', 'P', 'OG', 'AMMING', ''] 이렇게 빈 문자열(' ')이 추가되서 나온다 그러니까 신경 쓰지 말고 -1 그대로 적어준다
*/
