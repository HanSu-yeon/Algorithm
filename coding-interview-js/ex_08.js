//문제: 괄호 짝 맞추기

function solution(s) {
  const stack = [];

  for (const ele of s) {
    if (ele == '(') {
      stack.push(ele);
    } else if (ele == ')') {
      //스택이 비었는지 체크
      if (stack.length == 0) {
        return false;
      }
      stack.pop();
    }
  }
  //스택에 괄호가 남아있지 않으면 짝이 맞은 것
  if (stack.length == 0) {
    return true;
  } else {
    //스택에 괄호가 남아 있으면 짝이 맞지 않은 것
    return false;
  }
}

console.log(solution('(())()')); // 반환값 : true
console.log(solution('((())()')); // 반환값 : false
console.log(solution('(()))')); // 반환값 : false
