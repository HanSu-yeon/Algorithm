//과목 평균 구하기

//내가 푼 방식
let score = prompt("숫자");
let sum = 0;
let arr = score.split(" ");
for (let i = 0; i < arr.length; i++) {
  sum = sum + parseInt(arr[i]);
}
console.log(Math.floor(sum / arr.length)); //Math.floor() : 소수점 자리를 모두 버림

//다른 풀이
let score = prompt("숫자").split(" ");
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum = sum + parseInt(arr[i], 10); //arr[i]를 십진수 형태의 숫자로 데이터 타입을 변환
}
console.log(Math.floor(sum / arr.length));
