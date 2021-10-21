//내가 푼 방식

function solution(s) {
  let answer = ""; //answer를 스트링으로 만들어 값을 누적한다
  for (let i = 0; i < s.length; i++) {
    answer += s[i].toUpperCase(); //문자열 길이만큼 반복문을 돌면서 각 요소들을 대문자로 바꿔 answer변수에 추가한다
  }
  return answer;
}

let str = "ItisTimeToStudy";
console.log(solution(str));

//다른 사람 풀이1
function solution(s) {
  let answer = "";
  for (let x of s) {
    if (x === x.toLowerCase()) answer += x.toUpperCase();
    else answer += x;
  }
  return answer;
}
//다른 사람 풀이2 아스키코드 사용
//소문자a는 97이고 대문자A는 65다 둘의 차이는 32 즉 (소문자 아스키넘버-32)를 하면 대문자 아스키넘버가 나온다
function solution(s) {
  let answer = "";
  for (let x of s) {
    let num = x.charCodeAt();
    //소문자라면(97~122 소문자 범위)
    //해당 알파벳의 대문자 아스키 넘버 구한걸 문자열로 변환해 answer에 누적한다
    if (num >= 97 && num <= 122) answer += String.fromCharCode(num - 32);
    else answer += x;
  }
  return answer;
}
