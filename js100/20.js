//몫과 나머지 구하기
//주의! 몫 구할때 Math.floor 내림 함수를 사용해 정수를 리턴한다
const num = prompt("두 수 입력").split(" ");

const share = Math.floor(parseInt(num[0], 10) / parseInt(num[1], 10));
const remainder = parseInt(num[0], 10) % parseInt(num[1], 10);

console.log(share, remainder);
