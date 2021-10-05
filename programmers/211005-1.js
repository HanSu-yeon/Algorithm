function solution(n) {
  var sum = 0; //변수sum을 0으로 초기화
  for (let i = 1; i <= n; i++) {
    //1부터 n까지 for문을 돌리면서
    if (n % i === 0) {
      //n을 i로 나눴을 때 나머지가 0이 나오면
      sum += i; //sum에 더해준다
    }
  }

  return sum;
}
//테스트 코드
console.log(solution(12));
console.log(solution(5));
