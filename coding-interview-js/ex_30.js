/*
문제: 미로 탈출
링크: https://school.programmers.co.kr/learn/courses/30/lessons/159993
*/

/*
목표: 시작 지점에서 레버를 당겨 문을 열고, 그 후 출구에 도착하는 최소 거리를 구하는 것
문제 분석
- S:시작지점, L:레버, E:출구
- X: 지나갈 수 없는 벽, O는 이동 가능한 통로
- 이동 경로는 4방향(상,하,좌,우)으로 제한됨
- 최단 거리를 찾아야 하기 때문에 BFS를 사용하여 각 지점의 최소 이동 거리를 구하는 것이 좋다

접근 방법
1. 위치 찾기: 먼저 지도를 탐색하여 시작 지점(S), 레버(L),출구(E)의 좌표를 찾는다
2. BFS로 거리 계산
- S에서 L까지의 최소 거리와, L에서 E까지의 최소 거리를 구한다
- 각각의 구간에 대해 BFS를 실행하여 최단 거리를 구할 수 있음
3. 결과 계산
- S에서 L로 이동할 수 없거나, L에서 E로 이동할 수 없으면 두 지점이 연결되어 있지 않다는 의미이므로 -1을 반환함
- 두 경로를 더한 값을 반환하여 총 이동 거리를 구함
*/

//방법1
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

function solution(maps) {
  const rows = maps.length;
  const cols = maps[0].length;
  //방향(상,하,좌,우)
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  //특정 위치에서 BFS로 최단 거리 계산 함수
  function bfs(start, end) {
    const [startRow, startCol] = start;
    const [endRow, endCol] = end;

    const queue = new Queue();
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

    queue.enqueue([startRow, startCol, 0]); //[현재 행, 현재열, 거리]
    visited[startRow][startCol] = true;

    while (!queue.isEmpty()) {
      const [currentRow, currentCol, dist] = queue.dequeue();

      if (currentRow === endRow && currentCol === endCol) {
        return dist;
      }

      for (const [dr, dc] of directions) {
        const newRow = currentRow + dr;
        const newCol = currentCol + dc;

        if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && maps[newRow][newCol] !== 'X' && !visited[newRow][newCol]) {
          visited[newRow][newCol] = true;
          queue.enqueue([newRow, newCol, dist + 1]);
        }
      }
    }
    return -1; //도달할 수 없는 경우
  }
  //시작, 레버,출구 위치 찾기
  let start, lever, exit;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (maps[i][j] === 'S') start = [i, j];
      else if (maps[i][j] === 'L') lever = [i, j];
      else if (maps[i][j] === 'E') exit = [i, j];
    }
  }
  // S -> L 거리, L -> E 거리 계산
  const distanceToLever = bfs(start, lever);
  const distanceToExit = bfs(lever, exit);

  //경로가 없느면 -1 반환, 있으면 거리 합 반환
  if (distanceToLever === -1 || distanceToExit === -1) {
    return -1;
  } else {
    return distanceToLever + distanceToExit;
  }
}

console.log(solution(['SOOOL', 'XXXXO', 'OOOOO', 'OXXXX', 'OOOOE']));
