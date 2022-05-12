//내가 푼 방식
function solution(s) {
  let answer = "";
  for (let x of s) {
    if (!answer.includes(x)) {
      //answer변수에 특정 문자가 없다면
      answer += x; //해당 문자를 넣어라
    }
  }
  return answer;
}
str = "ksekkset";

console.log(solution(str));

//다른 사람 풀이
function solution(s) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    // console.log(s[i], i, s.indexOf(s[i]));
    if (s.indexOf(s[i]) === i) {
      //최초의 인덱스번호===현재 자기의 본래 위치
      answer += s[i];
    }
  }
  return answer;
}

//indexOf(찾으려는 문자열): 찾으려는 문자열이 있다면 첫번째로 발견된 인덱스를 리턴해준다
//indexOf(찾으려는 문자열,(인덱스)) : 몇 번 인덱스 이후부터 찾으려는 문자의 인덱스 번호를 리턴해라
//이 함수를 사용할때는 for..of 말고 index로 탐색해야한다

//indexOf()로 특정문자 개수세기
function solution(s) {
  let answer = 0;
  let pos = s.indexOf("k");
  while (pos !== -1) {
    answer++;
    pos = s.indexOf("k", pos + 1);
  }

  return answer;
}
