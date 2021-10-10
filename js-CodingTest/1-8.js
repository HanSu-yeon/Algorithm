//다른 사람 풀이

function solution(arr) {
  let answer = arr; //배열 얕은복사
  let sum = arr.reduce((a, b) => a + b, 0); //아홉 난쟁이 키 합
  console.log(arr);
  for (let i = 0; i < arr.length - 1; i++) {
    //arr.length-1 : j가 있으니 끝까지 갈 필요 없음
    for (let j = i + 1; j < arr.length; j++) {
      if (sum - (arr[i] + arr[j]) === 100) {
        //총 합에서 가짜 난쟁이 2명 뺀 값 ===100이라면
        arr.splice(j, 1); //뒤에서부터 삭제한다 그래야 인덱스를 삭제해도 영향x
        arr.splice(i, 1);
      }
    }
  }
  return answer;
}
const arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
