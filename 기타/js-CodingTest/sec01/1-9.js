function solution(s) {
  let answer = s;

  return answer.split("A").join("#");
}

console.log(solution("BANANA"));

//다른 사람 풀이1
function solution(s) {
  let answer = "";
  for (let x of s) {
    if (x === "A") answer += "#";
    else answer += x;
  }
  return answer;
}
console.log(solution("BANANA"));

//다른 사람 풀이2 (정규식 사용)
function solution(s) {
  let answer = s;
  answer = answer.replace(/A/g, "#");
  return answer;
}
