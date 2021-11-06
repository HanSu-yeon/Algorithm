// 내가 푼 방식
function solution(s) {
  let answer;
  let newStr = ""; //뒤로 읽은 문자열을 저장할 변수
  let lowerStr = s.toLowerCase(); //입력한 매개변수를 소문자로 변환해 대소 문자 구분을 없애준다
  for (let i = lowerStr.length - 1; i >= 0; i--) {
    newStr += lowerStr[i]; //입력한 문자열을 뒤에서부터 읽는다
  }

  if (lowerStr === newStr) answer = "yes";
  //회문 문자열이면 yes
  else answer = "no"; //아니라면 no
  return answer;
}

let str = "goooG";
console.log(solution(str));

//다른 사람 풀이 1
function solution(s) {
  let answer = "YES";
  s = s.toLowerCase();
  let len = s.length;

  for (let i = 0; i < Math.floor(len / 2); i++) {
    //len-i-1에서 1빼는 이유: 0부터 도니까!
    if (s[i] !== s[len - i - 1]) return "NO";
  }
  return answer; //다 통과하면 YES 리턴
}

let str = "goooT";
console.log(solution(str));

//풀이 2 reverse메서드 사용
/*split('') : 문자 하나하나가 원소가 된 배열로 바뀜 
s.split("")=>[ 'g', 'o', 'o', 'o', 't' ]
s.split("").reverse() =>[ 't', 'o', 'o', 'o', 'g' ]
s.split("").reverse().join("") => tooog  join을 사용해 string으로 묶는다
*/
function solution(s) {
  let answer = "YES";
  s = s.toLowerCase();
  if (s.split("").reverse().join("") !== s) return "NO";
  return answer;
}

let str = "goooG";
console.log(solution(str));
