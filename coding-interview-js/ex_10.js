//문제: 괄호 회전하기
//링크: https://school.programmers.co.kr/learn/courses/30/lessons/76502

//내가 푼 방식
function solution(s) {
  let tmpArr = [];
  let cnt = 0;
  for (const ele of s) {
    tmpArr.push(ele);
  }

  for (let i = 0; i < s.length; i++) {
    if (i > 0) {
      let firstEle = tmpArr.shift();
      tmpArr.push(firstEle);
    }
    let stack = [];
    let isValid = true;
    for (const ele of tmpArr) {
      if (ele == '(' || ele == '{' || ele == '[') {
        stack.push(ele);
      } else {
        if (stack.length == 0) {
          isValid = false;
          break;
        }
        let top = stack[stack.length - 1];

        if ((ele == ')' && top == '(') || (ele == ']' && top == '[') || (ele == '}' && top == '{')) {
          stack.pop();
        }
      }
    }
    if (stack.length == 0 && isValid) {
      cnt++;
    }
  }

  return cnt;
}

/**📌다른 풀이 참고
 *  문자열을 진짜로 회전시키면 연산 비용이 많이 드므로 인덱스를 활용함!!
 *  i를 첫 번째 문자의 위치를 가리키는 값이라 생각해 회전을 간단히 구현하였음
 *  j는 i 이후 등장하는 문자를 가리키는 인덱스 = 오프셋 역할
 */
function solution(s) {
  const n = s.length;
  let answer = 0;

  for (let i = 0; i < s.length; i++) {
    const stack = [];

    let isCorrect = true;

    for (let j = 0; j < n; j++) {
      //괄호 문자열을 회전시키면서 참조
      //실제 인덱스 % 문자열 길이
      const c = s[(i + j) % n];

      if (c === '[' || c === '(' || c === '{') {
        //열린 괄호는 푸시
        stack.push(c);
      } else {
        if (stack.length === 0) {
          //여는 괄호가 없는 경우
          isCorrect = false;
          break;
        }

        const top = stack[stack.length - 1];
        if (c === ']' && top === '[') {
          stack.pop();
        } else if (c === '}' && top === '{') {
          stack.pop();
        } else if (c === ')' && top === '(') {
          stack.pop();
        } else {
          isCorrect = false;
          break;
        }
      }
    }
    //모든 괄호의 짝이 맞는 경우
    if (isCorrect && stack.length === 0) {
      answer += 1;
    }
  }
  return answer;
}

console.log(solution('[](){}')); //3
console.log(solution('}]()[{'));
console.log(solution('[)(]'));
console.log(solution('}}}'));
