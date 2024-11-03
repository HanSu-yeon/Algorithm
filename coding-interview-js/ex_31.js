/*
문제: 양과 늑대
링크: https://school.programmers.co.kr/learn/courses/30/lessons/92343
*/

/**
 * 문제 분석
 * - 목표: 루트 노드에서 시작하여 이동 가능한 노드를 탐색하면서 최대한 많은 양을 모으는 경로를 찾는 것
 * - 제약 조건
 *  a. 노드를 방문할 때 늑대의 수 >= 양의 수 가 되어버리면 그 이후의 경로는 막히게 됨
 *  b. 노드들의 연결 관계는 edges 배열로 주어지며 이는 트리 구조로 표현됨
 */

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
  isEmpty() {
    return this.front === this.rear;
  }
}

//1.트리 구축 함수
//info.length =노드 개수
function buildTree(info, edges) {
  const tree = Array.from({ length: info.length }, () => []);
  for (const [from, to] of edges) {
    tree[from].push(to);
  }
  return tree;
}

function solution(info, edges) {
  const tree = buildTree(info, edges); //2.트리 생성
  let maxSheep = 0; //3.최대 양의 수를 저장할 변수 초기화
  //4.BFS를 위한 큐 생성 및 초기 상태 설정
  const q = new Queue();
  q.push([0, 1, 0, new Set()]); //(현재 위치, 양의 수, 늑대의 수, 방문한 노드 집합)

  //BFS 시작
  while (!q.isEmpty()) {
    //5.큐에서 상태 가져오기
    const [current, sheepCount, wolfCount, visited] = q.pop();
    //6.최대 양의 수 업데이트
    maxSheep = Math.max(maxSheep, sheepCount);
    //7.방문한 노드 집합에 현재 노드의 이웃 노드 추가
    for (const next of tree[current]) {
      visited.add(next);
    }
    //8.인접한 노드들에 대해 탐색
    for (const next of visited) {
      if (info[next]) {
        //9.늑대일 경우
        if (sheepCount !== wolfCount + 1) {
          const newVisited = new Set(visited);
          newVisited.delete(next);
          q.push([next, sheepCount, wolfCount + 1, newVisited]);
        }
      } else {
        //양일 경우
        const newVisited = new Set(visited);
        newVisited.delete(next);
        q.push([next, sheepCount + 1, wolfCount, newVisited]);
      }
    }
  }
  return maxSheep;
}

console.log(
  solution(
    [0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1],
    [
      [0, 1],
      [1, 2],
      [1, 4],
      [0, 8],
      [8, 7],
      [9, 10],
      [9, 11],
      [4, 3],
      [6, 5],
      [4, 6],
      [8, 9],
    ]
  )
);
