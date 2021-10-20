//문제41 소수인지 판별

//내가 푼 방식
const num = 6;

if (num % 2 !== 0) {
  console.log("소수 NO");
} else {
  console.log("소수 YES");
}

//다른 사람 풀이
function check_prime(num) {
  for (let i = 2; i < num; i++) {
    const result = num % i;
    if (result === 0) {
      console.log("NO");
      return false;
    }
  }
  //1은 소수가 아니다
  if (num === 1) {
    console.log("NO");
    return;
  }
  console.log("YES");
}

check_prime(num);

// //문제42
function solution(a, b) {
  const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  // new Date(년, 월, 일) 1월~12월은 0~11이고 일~토는 0~6
  const day = new Date(2020, a - 1, b);
  // const day = new Date("2020-" + a + "-" + b); 또는 이렇게 적을 수도 있다
  return week[day.getDay()];
}
solution(5, 24);

//문제43 10진수를 2진수로 변환
//내가 푼 방식
let num = 30;

arr = [];
while (Math.floor(num / 2) >= 1) {
  //몫이 1나올 때까지 반복문 돌림
  arr.unshift(num % 2); //나머지를 배열 맨 앞쪽에 추가함
  num = Math.floor(num / 2); //num값을 몫으로 바꿔준다
}
arr.unshift(num); //마지막 num값을 배열에 추가하고
console.log(arr.join("")); //배열의 원소를 연결하여 하나의 값으로 만든다

//다른 사람 풀이
let num = 30;
let arr = [];
let result = "";

while (num) {
  //num이 0이되면 반복문 종료
  arr.push(num % 2);
  num = parseInt(num / 2, 10);
}
arr.reverse(); //배열의 순서를 반전

arr.forEach((n) => {
  //배열의 각 요소들을 result에 추가해 하나의 값으로 만든다
  result += n;
});

console.log(result);
