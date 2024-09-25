/**
 * 문제: 방문 길이
 * 링크: https://school.programmers.co.kr/learn/courses/30/lessons/49994
 */

//1.좌표평면을 벗어나는지 체크하는 함수
function isValidMove(nx, ny) {
  return nx >= -5 && nx <= 5 && ny >= -5 && ny <= 5;
}
//2.dir를 확인해 다음 좌표 결정
function updateLocation(x, y, dir) {
  switch (dir) {
    case 'U':
      return [x, y + 1];
    case 'D':
      return [x, y - 1];
    case 'R':
      return [x + 1, y];
    case 'L':
      return [x - 1, y];
  }
}

function solution(dirs) {
  let x = 0;
  let y = 0;

  //3.겹치는 좌표는 1개로 처리하기 위함
  const visited = new Set();

  for (const dir of dirs) {
    //4.주어진 방향(dir)대로 움직이면서 좌표 저장
    const [nx, ny] = updateLocation(x, y, dir);

    if (!isValidMove(nx, ny)) {
      //5.벗어난 좌표는 인정하지 않음
      continue;
    }
    //6.A에서 B로 이동한 경로를 기록(현재 위치 (x, y)에서 새로운 위치 (nx, ny)로 이동한 경로)
    //경로는 양방향이므로, B에서 A로 이동한 경로도 추가하여 양방향 이동을 모두 기록
    visited.add(`${x}${y}${nx}${ny}`);
    visited.add(`${nx}${ny}${x}${y}`);
    //7.좌표를 이동했으므로 업데이트
    [x, y] = [nx, ny];
  }
  //총 지나간 경로를 반환하는 것으로 양방향 이동을 모두 기록했으므로 실제 경로 개수는 2로 나눈 후 반환한다
  return visited.size / 2;
}
