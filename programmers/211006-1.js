//내가 푼 방식 (틀렸음)
//문자열s가 숫자로만 구성돼있는지 검사하는 과정에서 계속 true만 나옴
// function solution(s) {
//   let answer = true;
//   if (s.length === 4 || s.length === 6) {
//     //1.문자열 길이 4 or 6검사

//     if (typeof Number(s) === "number") {
//       return answer;
//     } else {
//       answer = false;
//       return answer;
//     }
//   } else {
//     answer = false;
//     return answer;
//   }
// }

//다른사람 풀이 1
function solution(s) {
  let result = parseInt(s); //문자열을 숫자로 바꿔 result에 저장
  //문자열s 길이가 4또는6 그리고 s가 result랑 같다면 true
  if ((s.length === 4 || s.length === 6) && s == result) {
    result = true;
  } else {
    result = false;
  }
  return result;
}
console.log(solution("a234"));
console.log(solution("9987"));
//다른사람 풀이 2
// \d : 숫자,[0-9와 같음]
// {6}|{4}  : 6글자 또는 4글자만
function alpha_string46(s) {
  var regex = /^\d{6}$|^\d{4}$/;
  return regex.test(s);
}

console.log(alpha_string46("a234"));
