import sys
sys.setrecursionlimit(100000)
sys.stdin = open("input.txt", "r")


def DFS(x, y):
    visited[x][y] = True
    # 상 하 좌 우
    directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]
    for dx, dy in directions:
        nextX, nextY = x+dx, y+dy
        if nextX < 0 or nextX >= n or nextY < 0 or nextY >= m:
            continue
        # nextX와 nextY가 이차원배열안에 포함되면 다음 if문 실행 (0<= nextX <n) and (0<= nextY <m)
        # 값이 1이고 해당 원소를 방문하지 않은 경우 방문해라
        if arr[nextX][nextY] == 1 and not visited[nextX][nextY]:  # 사실 1은 True와 같기 때문에 ==1을 생략해도 된다
            DFS(nextX, nextY)


t = int(input())
for _ in range(t):
  # 열 행 테스트케이스
    m, n, k = map(int, input().split())
    arr = [[0]*m for _ in range(n)]  # 다차원 배열 초기화
    visited = [[False]*m for _ in range(n)]  # 방문 checkList
    for _ in range(k):  # 테스트 케이스를 받아 배추가 있는 곳은 1로 표기한다
        y, x = map(int, input().split())
        arr[x][y] = 1

    result = 0
    for i in range(n):  # 행
        for j in range(m):  # 열
            if arr[i][j] == 1 and not visited[i][j]:  # 배추가 있고 방문하지 않았다면
                DFS(i, j)
                result += 1
    print(result)
