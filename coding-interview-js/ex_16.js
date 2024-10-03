//문제: 기능 개발
//링크: https://school.programmers.co.kr/learn/courses/30/lessons/42586

//내가 푼 방식 -> 틀림
class Queue {
  items = [];
  front = 0;
  rear = 0;

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  pop() {
    return this.items[this.front++];
  }

  size() {
    return this.rear - this.front;
  }
}

function solution(progress, speeds) {
  const daysQueue = new Queue();
  const answer = [];
  //잔여일수
  for (let i = 0; i < progress.length; i++) {
    let days = Math.floor((100 - progress[i]) / speeds[i]);
    daysQueue.push(days);
  }
  let cnt = 0;

  while (daysQueue.size() > 1) {
    let first = daysQueue.items[daysQueue.front];
    let next = daysQueue.items[daysQueue.front + 1];
    //앞작업보다 늦게 끝나는 작업 있으면 멈춰라
    if (first < next) {
      cnt++;
      answer.push(cnt);
      daysQueue.pop();

      cnt = 0;

      continue;
    }
    daysQueue.pop();
    cnt++;
  }
  cnt++;
  answer.push(cnt);

  return answer;
}

//다른 풀이 참고
function solution(progresses, speeds) {
  const answer = [];
  const n = progresses.length;

  //각 작업의 배포 가능일 계산
  const daysLeft = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));

  let count = 0; //배포될 작업의 수 카운트
  let maxDay = daysLeft[0]; //현재 배포될 작업 중 가장 늦게 배포될 작업의 가능일

  for (let i = 0; i < n; i++) {
    //배포 가능일이 가장 늦은 배포일보다 빠르면
    if (daysLeft[i] <= maxDay) {
      count++;
    } else {
      //배포 예정일이 기준 배포일보다 느리면
      answer.push(count);
      count = 1;
      maxDay = daysLeft[i];
    }
  }
  //마지막으로 카운트된 작업들을 함께 배포
  answer.push(count);
  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5]));
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
