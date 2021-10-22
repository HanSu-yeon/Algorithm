//내가 푼 방식
function solution(s) {
  let answer;
  if (s.length % 2 !== 0) {
    //문자열의 길이가 홀수면 가운데 문자를 출력
    let i = Math.floor(s.length / 2);
    answer = s[i];
  } else if (s.length % 2 === 0) {
    //문자열의 길이가 짝수라면 가운데 2개의 문자를 출력
    let i = Math.floor(s.length / 2);
    answer = s[i - 1] + s[i];
  }
  return answer;
}
const s = "study";
console.log(solution(s));
//다른 사람 풀이 1 substring사용
function solution(s) {
  let answer;
  let mid = Math.floor(s.length / 2);
  //문자열 길이가 홀수라면
  if (s.length % 2 == 1) answer = s.substring(mid, mid + 1);
  else answer = s.substring(mid - 1, mid + 1);
  return answer;
}

//substr사용
function solution(s) {
  let answer;
  let mid = Math.floor(s.length / 2);
  //문자열 길이가 홀수라면
  if (s.length % 2 == 1) answer = s.substr(mid, 1);
  else answer = s.substr(mid - 1, 2);
  return answer;
}
