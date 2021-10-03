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
