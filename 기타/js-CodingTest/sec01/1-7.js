//내가 푼 방식

/*숫자에서 1의자리 숫자 뽑아내는법 (문자열로 바꾸지 않고)
해당 숫자를 10으로 나눠 나머지를 구하는 연산을 하면 일의 자리를 얻어낼 수 있다!!!
*/

function solution(day, arr) {
  let cnt = 0;
  for (let i = 0; i < arr.length; i++) {
    if (day === arr[i] % 10) {
      cnt += 1;
    }
  }
  return cnt;
}
//테스트 코드
const arr = [25, 23, 11, 47, 53, 17, 33];
const arr2 = [12, 20, 54, 30, 87, 91, 30];
console.log(solution(3, arr)); //3
console.log(solution(0, arr2)); //3

//다른 사람 풀이
function solution(day, arr) {
  let answer = 0;
  for (let x of arr) {
    if (x % 10 === day) answer++;
  }
  return answer;
}
