from collections import deque
import sys
sys.stdin = open("input.txt", "r")


def dfs(start):
    print(start, end=' ')
    visited[start] = True
    for e in adj[start]:  # 연결되어있는 인접한 정점들
        if not(visited[e]):
            dfs(e)


def bfs(start):
    q = deque([start])
    while q:  # 큐가 비어있을때까지 반복
        start = q.popleft()
        if not(visited[start]):
            visited[start] = True
            print(start, end=' ')
            for e in adj[start]:
                if not visited[e]:
                    q.append(e)


if __name__ == "__main__":
    n, m, v = map(int, input().split())
    adj = [[] for _ in range(n+1)]  # [[], [], [], [], []]

    for _ in range(m):
        x, y = map(int, input().split())
        adj[x].append(y)  # 무방향 그래프라서 이렇게 넣어준다
        adj[y].append(x)
    for e in adj:
        e.sort()

    #print(adj)     [[], [2, 3, 4], [1, 4], [1, 4], [1, 2, 3]]
    visited = [False]*(n+1)
    dfs(v)
    print()
    visited = [False]*(n+1)
    bfs(v)
