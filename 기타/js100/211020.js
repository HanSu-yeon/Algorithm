//문제44 각 자리수의 합

//내가 푼 방식
const num = prompt("양의 정수 입력").split("");

let sum = 0;
// console.log(num);
function solution(num) {
  for (let i = 0; i < num.length; i++) {
    sum += Number(num[i]);
  }
  return sum;
}

solution(num);

//다른 사람 풀이
//숫자를 10으로 나눈 나머지를 더하는 방식으로 문제 해결
let n = prompt("숫자를 입력하세요");
let sum = 0;

while (n !== 0) {
  sum += n % 10;
  n = Math.floor(n / 10);
}

console.log(sum);

//문제 45 getTime()함수 사용해 현재 연도 출력하기
const date = new Date(); //현재 날짜를 day변수에 할당
const year = day.getTime();
year = Math.floor(year / (3600 * 24 * 365 * 1000)) + 1970;

console.log(year);

//문제46

//내가 푼 방식
const num = "1234567891011121314151617181920".split("");
let sum = 0;
function solution(num) {
  for (let i = 0; i < num.length; i++) {
    sum += Number(num[i]);
  }
  return sum;
}
solution(num);

//다른 사람 풀이 1
let arr = [];
let sum = 0;
for (let i = 0; i < 20; i++) {
  arr[i] = i + 1;
}

arr.forEach((n) => {
  while (n !== 0) {
    sum += n % 10; //10으로 나눈 나머지 값을 더하는 방식
    n = Math.floor(n / 10);
  }
});

console.log(sum);

//다른 사람 풀이 2
let num = "";
let sum = 0;
//변수 num에 1부터 20까지 반복문을 통해 나온 i의 값을 더해준다
for (let i = 1; i < 21; i++) {
  num += i;
}
//num길이만큼 반복해서 sum에 더한다
for (let j = 0; j < num.length; j++) {
  sum += parseInt(num[j], 10);
}
console.log(sum);

//문제47
const people = {
  이호준: "01050442903",
  이호상: "01051442904",
  이준호: "01050342904",
  이호준: "01050442903",
  이준: "01050412904",
  이호: "01050443904",
  이호준: "01050442903",
};

let result = new Set(); //Set 객체 선언

//for ..in 반복문으로 객체의 key값에 접근한다
for (let key in people) {
  result.add(people[key]); //Set객체에 특정 key의 value값을 추가한다
}

console.log(result.size); //size: Set객체 내에 있는 요소들의 개수 반환

//문제48
const str = "AAABBBcccddd";
let newStr = "";

for (let i = 0; i < str.length; i++) {
  //문자열 길이만큼 반복문 돌면서
  if (str[i] === str[i].toUpperCase()) {
    //문자열의 i번째 요소가 대문자면
    newStr += str[i].toLowerCase(); //소문자로 바꿔서 newStr에 추가하고
  } else {
    //대문자가 아니라면
    newStr += str[i].toUpperCase(); //대문자로 바꿔 newStr에 추가해라
  }
}

console.log(newStr);
