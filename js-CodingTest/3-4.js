function solution(s, t) {
  let answer = [];
  let p = 1000; //문자열보다 큰 수로 지정한다
  //왼쪽에서 오른쪽으로 for문 돌며 탐색
  //x요소가 t랑 같으면 p를 0으로 바꿔라
  for (let x of s) {
    if (x === t) {
      p = 0;
      answer.push(p); //배열에 p값 넣기
    } else {
      p++; //아니라면 p를 1 증가시키고 배열에 push
      answer.push(p);
    }
  }
  p = 1000; //새로운 for문을 시작할때 p를 1000으로 초기화 해준다
  //오른쪽에서 왼쪽으로 for문 돌며 탐색
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) {
      p = 0;
    } else {
      p++;
      answer[i] = Math.min(answer[i], p); //answer[i]요소와 p 중 작은 값을 찾아 answer[i]에 할당
    }
  }
  return answer;
}

let str = "teachermode";
console.log(solution(str, "e"));
