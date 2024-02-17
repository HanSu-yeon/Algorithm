function solution(s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (stack.length == 0) {
      stack.push(s[i]);
    } else if (stack[stack.length - 1] == s[i]) {
        //stack의 top요소와 현재 문자열이 같으면
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  if (stack.length == 0) {
    return 1;
  } else {
    return 0;
  }
}