function solution(s) {
  let answer = [];
  for (let x of s) {
    //indexOf():찾으려는 값이 배열에 없으면 -1을 리턴한다
    if (answer.indexOf(x) < 0) {
      //배열에 없으면
      answer.push(x); //해당 문자열을 배열에 추가해라
    }
  }
  return answer;
}
let str = ["good", "time", "good", "time", "student"];
console.log(solution(str));

//다른 사람 풀이 filter(콜백함수,) 사용
function solution(s) {
  let answer = [];
  answer = s.filter(function (v, i) {
    //콜백함수내부 v:value(요소),i: 인덱스번호
    // console.log(v, i);
    // if (s.indexOf(v) === i) return true; 이걸 간소화하면 아래처럼 쓸 수 있음
    return s.indexOf(v) === i;
    //s에서의 v의 인덱스번호와 v의 인덱스번호가 일치하다면 true리턴
    //filter는 콜백함수가 참을 리턴한 그 요소들만 모아서 새 배열을 만들어 answer에 넣는다
  });
  return answer;
}
