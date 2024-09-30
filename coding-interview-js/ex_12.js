//문제: 주식 가격
//링크: https://school.programmers.co.kr/learn/courses/30/lessons/42584

//내가 시도한 방식 -> 틀림
function solution(prices) {
  const answer = [];

  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i] <= prices[i + 1]) {
      answer.push(prices.length - (i + 1));
    } else {
      answer.push(1);
    }
  }
  answer.push(0);
  return answer;
}

//다른 풀이

function solution(prices) {
  const n = prices.length;
  const answer = new Array(n).fill(0);

  //스택을 사용해 이전 가격과 현재 가격을 비교
  const stack = [0]; //스택 초기화

  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && prices[i] < prices[stack[stack.length - 1]]) {
      //가격이 떨어졌으므로 이전 가격의 기간을 계산
      const j = stack.pop(); //인덱스
      answer[j] = i - j;
    }
    stack.push(i);
  }
  //스택에 남아 있는 가격들은 가격이 떨어지지 않은 경우
  while (stack.length > 0) {
    const j = stack.pop();
    answer[j] = n - 1 - j;
  }
  return answer;
}

// console.log(solution([1, 2, 3, 2, 3]));
console.log(solution([1, 6, 9, 5, 3, 2, 7]));
