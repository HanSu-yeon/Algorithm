//문제 32 문자열을 입력받으면 단어의 갯수를 출력하는 프로그램
//내가 푼 방식
const string = "안녕하세요. 저는 제주대학교 컴퓨터공학전공 혜림입니다.";

const countWord = string.split(" ").length;

console.log(countWord); //5

//문제 33 거꾸로 출력하기
//내가 푼 방식
/*띄어쓰기 기준으로 잘라(split) 문자열 배열로 만들고
.map(Number)를 써줘 문자가 숫자로 바뀌어 배열로 들어가게 된다*/
const n = "2 4 6 7 8";
const Num = n.split(" ").map(Number);
console.log(Num.reverse()); //[ 8, 7, 6, 4, 2 ]

//다른 사람 풀이
const data = prompt("숫자를 입력하세요.").split(" ").reverse();
let result = "";

for (let i = 0; i < data.length; i++) {
  result += data[i];
}

console.log(result);

//문제 34 키가 주어지면 순서대로 제대로 섰는지 확인하는 프로그램
//다른 사람 풀이 1
const height = "176 156 155 165 166 169".split(" "); //정렬하기전

function answer(height) {
  for (let i = 0; i < height.length; i++) {
    if (height[i] > height[i + 1]) {
      //i인덱스와 i+1인덱스 값을 비교했을 때 i가 더 크면 no
      return "no";
    } else {
      return "yes";
    }
  }
}
console.log(answer(height));

//다른 사람 풀이 2
const unsorted = prompt("키를 입력하세요");
let sorted = "";

sorted = unsorted
  .split(" ")
  .sort(function (a, b) {
    //.sort(function(a,b){return a-b;}) : 숫자로 된 배열을 오름차순으로 정렬할 때 사용
    //return b-a는 내림차순으로 정렬
    return a - b;
  })
  .join(" ");

if (unsorted === sorted) {
  console.log("Yes");
} else {
  console.log("No");
}
//문제 35 2제곱, 3제곱, 4제곱을 할 수 있는 Factory 함수를 만들기
//다른 사람 풀이
function one(n) {
  function two(value) {
    const sq = Math.pow(value, n); //Math.pow(base, exponent) : 주어진 밑 값을 주어진 지수 값으로 거듭제곱한 숫자 값
    return sq;
  }
  return two;
}

const a = one(2);
const b = one(3);
const c = one(4);

console.log(a(10));
console.log(b(10));
console.log(c(10));
