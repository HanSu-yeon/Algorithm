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
