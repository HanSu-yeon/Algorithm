function solution(s) {
  let answer = 0;

  //회전
  for (let i = 0; i < s.length; i++) {
    //회전 시킨 문자열 검사
    let stack = [];
    let valid = true; //올바른 괄호 문자열인지 판단 플래그
    for (let j = 0; j < s.length; j++) {
      let idx = (i + j) % s.length;
      let bracket = s[idx];
      //열린 괄호면 스택에 쌓음
      if (bracket == '(' || bracket == '{' || bracket == '[') {
        stack.push(bracket);
      } else {
        //닫힌괄호면
        if (stack.length == 0) {
          valid = false;
          break;
        }

        let top = stack[stack.length - 1];
        if ((top == '(' && bracket == ')') || (top == '{' && bracket == '}') || (top == '[' && bracket == ']')) {
          stack.pop();
        } else {
          valid = false;
          break;
        }
      }
    }

    if (valid && stack.length == 0) {
      answer++;
    }
  }
  return answer;
}