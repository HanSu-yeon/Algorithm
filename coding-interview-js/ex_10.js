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

console.log(solution('[](){}')); //3
console.log(solution('}]()[{'));
console.log(solution('[)(]'));
console.log(solution('}}}'));
