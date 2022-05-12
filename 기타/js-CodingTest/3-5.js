function solution(s) {
  let answer = "";
  let cnt = 1;
  s = s + " "; //맨 끝 문자 비교하기 위해

  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) {
      cnt += 1;
    } else {
      answer += s[i];
      if (cnt > 1) answer += String(cnt);
      cnt = 1;
    }
  }
  return answer;
}

let str = "KKHSSSSSSSE";
console.log(solution(str));
