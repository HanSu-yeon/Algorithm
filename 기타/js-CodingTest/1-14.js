//내가 푼 방식
function solution(s) {
  let answer;
  let max = s[0];
  for (let i = 1; i < s.length; i++) {
    if (s[i].length > max.length) {
      max = s[i];
    }
  }
  answer = max;
  return answer;
}
let str = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));

//다른 사람 풀이
function solution(s) {
  let answer,
    max = Number.MIN_SAFE_INTEGER;
  for (let x of s) {
    if (x.length > max) {
      max = x.length;
      answer = x;
    }
  }
  return answer;
}
