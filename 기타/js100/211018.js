//문제36 구구단 출력
const num = Number(prompt("1~9까지의 숫자 중 하나만 입력하세요"));
let result = ""; //결과값을 result에 담는다

for (let i = 1; i <= 9; i++) {
  result += i * num + " ";
}

//문제37 반장선거
// 다른 사람 풀이 참고
//학생들이 뽑은 후보들을 입력받으면 뽑힌 학생의 이름과 받은 표 수를 출력하는 프로그램

//입력된 값을 띄어쓰기 기준으로 쪼개 배열로 만들기
const array = prompt("이름을 입력해주세요.").split(" ");
let result = {};
let winner = "";
//for in 반복문을 활용해서 array의 길이만큼 반복을 수행한다
for (let index in array) {
  //index는 0부터 배열 길이까지 각 인덱스
  let val = array[index]; //result객체에 키값에 해당하는 값이 있다면 그 값에 +1을하고, 없다면 키값에 1을 추가
  result[val] = result[val] === undefined ? 1 : (result[val] = result[val] + 1);
}
/*키와 값이 추가된다면, winner라는 변수에 값을 넣어준다
그리고 result에서 키값만 따로 빼는 Object.keys()메서드를 사용한다
reduce메서드를 활용해 result객체에 학생들 이름을 넣었을 때 가장 큰 숫자를 뽑아내는 로직을 수행해 winner를 구한다*/
winner = Object.keys(result).reduce(function (a, b) {
  return result[a] > result[b] ? a : b;
});

console.log(`${winner}(이)가 총 ${result[winner]}표로 반장이 되었습니다.`); //혜원(이)가 총 4표로 반장이 되었습니다

//문제 38
//map함수는 function을 실행한 결과를 가지고 새로운 배열을 만들 때 사용
const scores = prompt("점수입력")
  .split(" ")
  .map(function (n) {
    return parseInt(n, 10);
  });

//sort를 통해 scores배열을 오름차순으로 정렬
scores.sort((a, b) => {
  return a - b;
});

let count = 0;
let arr = [];

while (arr.length < 3) {
  //1~3등까지만 필요하니까 arr배열의 길이가 3이상이 된다면 while문 종료하고 count를 콘솔에 찍는다
  let n = scores.pop(); //scores배열에서 배열의 마지막 요소 제거하고 n변수에 리턴함
  if (!arr.includes(n)) {
    //arr배열에 n이 없다면 이 배열에 n을 추가한다
    arr.push(n);
  }
  count += 1;
}

console.log(count);

//문제 39   q를 e로
//내가 푼 방식: replace를 사용하면 첫번째 q만 바뀌고 나머지는 변경이 되지 않아서 정규식 사용했음
const sen = prompt("문장 입력").split(" ");
// const sen = "hqllo my namq is hyqwon";

let replaceAll = sen.replace(/q/gi, "e");
//정규표현식에서 g : 모든 값에 대한 검사 / i:대/소문자 구분 안함
//gi를 붙이면 replaceAll과 같은 기능을 한다
//다른 사람 풀이1.replaceAll 사용
const sen = "hqllo my namq is hyqwon";
console.log(sen.replaceAll("q", "e"));

//다른 사람  풀이2 함수를 만들어 사용
/*searchStr기준으로 잘라 배열화 해준다 그리고 배열을 replaceStr로 구분해서 스트링으로 반환한다 */
const word = prompt("입력하세요.");

function replaceAll(str, searchStr, replaceStr) {
  return str.split(searchStr).join(replaceStr);
}

console.log(replaceAll(word, "q", "e"));

//문제40
//내가 푼 방식
//입력값 50 5 20 20 20 20 20
const n = prompt("총 몇 명 탈 수 있음").split(" ");

let count = 0; //탑승 가능한 인원수
let limit = Number(n[0]); //제한 무게
let totalPeople = Number(n[1]); //함께한 친구들의 수
for (let i = 2; i < n.length; i++) {
  //친구들 몸무게 값이 시작하는 인덱스 2부터 배열 길이만큼 반복문을 돌린다
  if (limit > n[i]) {
    //제한 무게가 탑승할 무게보다 크다면
    limit -= Number(n[i]); //제한 무게에서 탑승할 무게에서 빼주고
    count += 1; //탑승 인원에 1 더한다
  }
}
console.log(count);

//다른 사람 풀이
let total = 0;
let count = 0;
const limit = prompt("제한 무게를 입력하세요");
const n = prompt("인원수를 입력하세요");

for (let i = 1; i < n; i++) {
  total += parseInt(prompt("무게를 입력해주세요"), 10); //무게 입력할 때마다 total에 누적
  if (total <= limit) {
    //누적값이 제한 무게보다 같거나 작으면
    count = i; //탑승 가능 인원수를 i값으로 바꾼다
  }
}
console.log(count);
