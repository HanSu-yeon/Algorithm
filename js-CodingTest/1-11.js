//내가 푼 방식

function solution(s) {
  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      answer += 1;
    }
  }
  return answer;
}

let str = "KoreaTimeGood";
console.log(solution(str));

//다른 사람 풀이1
function solution(s) {
  let answer = 0;
  for (let x of s) {
    if (x === x.toUpperCase()) answer++;
  }
  return answer;
}

//다른 사람 풀이2 아스키코드 넘버 사용
//대문자 아스키 코드 NUM : 65~90(A-Z)
//소문자 아스키 코드 NUM : 97~122(a-z)
function solution(s) {
  let answer = 0;
  for (let x of s) {
    let num = x.charCodeAt();
    if (num >= 65 && num <= 90) answer++;
  }
  return answer;
}
