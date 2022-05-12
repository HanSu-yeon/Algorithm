//replace(/[^a-z]/g, ""): 소문자가 아닌 것들을 다 찾아서 빈 문자열로 바꿔라
function solution(s) {
  let answer = "YES";
  s = s.toLowerCase().replace(/[^a-z]/g, ""); //foundtimestudyydutsemitdnuof
  if (s.split("").reverse().join("") !== s) return "NO";

  return answer;
}

let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));
