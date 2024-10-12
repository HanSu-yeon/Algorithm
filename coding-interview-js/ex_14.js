/**
 * 문제: 표 편집
 * 링크: https://school.programmers.co.kr/learn/courses/30/lessons/81303
 */

//다른 사람 풀이1
function solution(n, k, cmd) {
  //1.삭제된 행의 인덱스를 저장하는 배열
  const deleted = [];

  //2.연결 리스트에서 각 행 위아래의 행의 인덱스를 저장하는 배열
  //up[i]: i번재 행 위에 있는 행의 인덱스를 저장
  //down[i]: i번재 행 아래에 있는 행의 인덱스를 저장
  const up = [...new Array(n + 2)].map((_, i) => i - 1);
  const down = [...new Array(n + 1)].map((_, i) => i + 1);

  //3.현재 위치를 나타내는 인덱스
  k += 1;

  //4.주어진 명령어(cmd) 배열 요소를 하나씩 처리
  for (const item of cmd) {
    //5.현재 위치를 삭제하고 그다음 위치로 이동
    if (item[0] === 'C') {
      deleted.push(k);
      up[down[k]] = up[k]; //현재 행의 아래 행이 바로 위 행을 가리키도록 함
      down[up[k]] = down[k]; //현재 행의 위 행이 바로 아래 행을 가리키도록 함
      k = n < down[k] ? up[k] : down[k]; //삭제 후, 아래 행이 존재하면 아래로 이동, 없으면 위로 이동
    } else if (item[0] === 'Z') {
      //6.가장 최근에 삭제된 행을 복원
      const restore = deleted.pop();
      down[up[restore]] = restore; //복원된 행의 위 행이 다시 그 행을 가리키도록 설정
      up[down[restore]] = restore; //복원된 행의 아래 행이 다시 그 행을 가리키도록 설정
    } else {
      //7.U 또는 D를 사용해 현재 위치를 위아래로 이동
      const [action, num] = item.split(' ');
      if (action === 'U') {
        for (let i = 0; i < num; i++) {
          k = up[k];
        }
      } else {
        for (let i = 0; i < num; i++) {
          k = down[k];
        }
      }
    }
  }

  //8.삭제된 행의 위치에 'X'를, 그렇지 않은 행의 위치에 'O'를 포함하는 문자열 반환
  const answer = new Array(n).fill('O');
  for (const i of deleted) {
    answer[i - 1] = 'X';
  }
  return answer.join('');
}

console.log(solution(8, 2, ['D 2', 'C', 'U 3', 'C', 'D 4', 'C', 'U 2', 'Z', 'Z']));
console.log(solution(8, 2, ['D 2', 'C', 'U 3', 'C', 'D 4', 'C', 'U 2', 'Z', 'Z', 'U 1', 'C']));
