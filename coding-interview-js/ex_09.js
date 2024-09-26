//문제: 10진수를 2진수로 변환하기

function solution(decimal) {
  let stack = [];

  while (decimal > 0) {
    let remainder = decimal % 2;
    stack.push(remainder);

    decimal = Math.floor(decimal / 2);
  }

  return stack.reverse().join('');

  /** pop()을 사용한 버전
  let binary = '';
  while (stack.length > 0) {
    binary += stack.pop();
  }
  return binary;
   * */
}

console.log(solution(10)); // 반환값 :  1010
console.log(solution(27)); // 반환값 :  11011
console.log(solution(12345)); // 반환값 : 11000000111001
