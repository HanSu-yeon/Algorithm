//문제13
const num = prompt("행성 숫자");

const arr = [
  "수성",
  "금성",
  "지구",
  "화성",
  "목성",
  "토성",
  "천왕성",
  "해왕성",
];

console.log(arr[num - 1]);

//문제14

const num = prompt("숫자");

if (num % 3 === 0) {
  console.log("짝");
} else {
  console.log(num);
}

//문제15
const inputName = prompt("이름");

console.log(`안녕하세요 저는 ${inputName}입니다`);
