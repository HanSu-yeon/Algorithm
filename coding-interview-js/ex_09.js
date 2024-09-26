//문제: 10진수를 2진수로 변환하기

function solution(decimal) {
  let binary = [];
  let share;
  let remain;
  while (share != 1) {
    share = Math.floor(decimal / 2);
    remain = decimal % 2;
    binary.push(remain);
    decimal = share;
  }
  binary.push(share);

  return binary.reverse().join('');
}

console.log(solution(10)); // 반환값 :  1010
console.log(solution(27)); // 반환값 :  11011
console.log(solution(12345)); // 반환값 : 11000000111001
