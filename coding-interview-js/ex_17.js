/**
 * 문제: 카드 뭉치
 * 링크: https://school.programmers.co.kr/learn/courses/30/lessons/159994
 */

/*
card1과 card2는 순차적으로 사용해야 함=> FIFO
시간 복잡도: O(n^2)
*/
function solution(cards1, cards2, goal) {
  var answer = '';

  for (let i = 0; i < goal.length; i++) {
    let c1 = cards1[0];
    let c2 = cards2[0];
    //card1에서 찾으면
    if (goal[i] == c1) {
      cards1.shift();
      goal.shift();
      //goal의 첫번째 문자열과 비교하기 위해 i를 -1로 지정
      i = -1;
      continue;
    } else if (goal[i] == c2) {
      //card2에서 찾으면
      cards2.shift();
      goal.shift();
      i = -1;
      continue;
    }
  }
  //goal의
  if (!goal.length) {
    answer = 'Yes';
  } else {
    answer = 'No';
  }

  return answer;
}

//다른 사람 풀이
//시간 복잡도: O(n)
class Queue {
  items = [];
  front = 0;
  rear = 0;

  constructor(arr) {
    this.items = arr;
    this.rear = arr.length;
  }
  //push
  push(item) {
    this.items.push(item);
    this.rear++;
  }

  //pop
  pop() {
    return this.items[this.front++];
  }
  //front에 해당하는 값
  first() {
    return this.items[this.front];
  }

  //isEmpty
  isEmpty() {
    return this.front === this.rear;
  }
}

function solution(cards1, cards2, goal) {
  cards1 = new Queue(cards1);
  cards2 = new Queue(cards2);
  goal = new Queue(goal);

  //goal의 문자열을 순차적으로 조회
  while (!goal.isEmpty()) {
    //cards1의 front와 일치하는 경우
    if (!cards1.isEmpty() && cards1.first() === goal.first()) {
      cards1.pop();
      goal.pop();
    } else if (!cards2.isEmpty() && cards2.first() === goal.first()) {
      //cards2의 front와 일치하는 경우
      cards2.pop();
      goal.pop();
    } else {
      break;
    }
  }
  return goal.isEmpty() ? 'Yes' : 'No';
}
console.log(solution(['i', 'drink', 'water'], ['want', 'to'], ['i', 'want', 'to', 'drink', 'water']));
