//문제 16
//풀이1. for문 사용
const text = "거꾸로";

let arr = "";
for (let i = text.length - 1; 0 <= i; i--) {
  //for문을 문자열 길이만큼 사용
  arr = arr + text[i]; //index값이 0보다 작은 경우 중지하기
}
console.log(arr);

// 풀이2 문자열을 배열로 변환하여 해결하는 방법
// 고민1. 문자열을 어떻게 배열에 담을 것인가
// 고민2. 배열에 담긴 문자열을 어떻게 다시 문자열로 변환할까?

// 해결방법
// 1. split()을 사용해 빈 문자값인 ''를 사용해 자른다
// 2. 배열로 저장된 값을 reverse() 함수를 이용해 역순으로 바꾼다
// 3. 이후 join()을 사용하여 다시 문자열로 반환

const result = text.split("").reverse().join("");

console.log(result);

//문제17
const height = prompt("키 입력");

if (height >= 150) {
  console.log("YES");
} else {
  console.log("NO");
}

// 문제18
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

// 문제19
//두 수 a, b가 주어지면, a의 b승을 구하는 프로그램 작성해라
//내가 푼 방식
let num = prompt("숫자").split(" "); //split파라미터에 공백 넣는거 주의

let a, b;
for (let i = 0; i < 2; i++) {
  a = parseInt(num[0], 10);
  b = parseInt(num[1], 10);
}
console.log(Math.pow(a, b));

//다른 풀이

let num = prompt("숫자").split(" ");
console.log(Math.pow(parseInt(num[0], 10), parseInt(num[1], 10)));

// 문제20
//몫과 나머지 구하기
//주의! 몫 구할때 Math.floor 내림 함수를 사용해 정수를 리턴한다
const num = prompt("두 수 입력").split(" ");

const share = Math.floor(parseInt(num[0], 10) / parseInt(num[1], 10));
const remainder = parseInt(num[0], 10) % parseInt(num[1], 10);

console.log(share, remainder);
