/**
 * 문제: 요세푸스 문제
 * 링크: 저자 출제
 */
//내가 푼 방식
/*
큐를 사용해 풀려고 했으나 큐를 전혀 사용하지 않았다.
저자의 풀이를 보니 접근법 자체는 맞는거 같다
*/
function solution(N, K) {
  const queue = [];
  let front = 0;
  let rear = 0;

  for (let i = 1; i <= N; i++) {
    queue.push(i);
    rear++;
  }
  while (queue.length > 1) {
    for (let i = 1; i < K; i++) {
      //front의 위치를 바꾸기 위해
      let lastItem = queue.shift();
      queue.push(lastItem);
    }

    queue.shift();
    rear = queue.length - 1;
  }

  return queue.pop();
}

//다른 사람 풀이
class Queue {
  items = [];
  front = 0;
  rear = 0;

  push(item) {
    this.items.push(item);
    this.rear++;
  }
  //이 문제에서는 큐의 크기를 알아야 한다
  size() {
    return this.rear - this.front;
  }

  pop() {
    //this.items[this.front] 반환(현재 큐의 첫 번째 요소) -> front++ 실행
    return this.items[this.front++];
  }
}

function solution(N, K) {
  const queue = new Queue();
  //1부터 N까지의 번호를 deque에 추가
  for (let i = 1; i <= N; i++) {
    queue.push(i);
  }

  while (queue.size() > 1) {
    //deque에 하나의 요소가 남을 때까지
    for (let i = 0; i < K - 1; i++) {
      queue.push(queue.pop()); //K번째 요소를 찾기 위해 앞에서부터 제거하고 뒤에 추가
    }
    queue.pop(); //K번째 요소 제거
  }
  return queue.pop(); //마지막으로 남은 요소 반환
}

console.log(solution(5, 2)); //3
console.log(solution(5, 3)); //4
