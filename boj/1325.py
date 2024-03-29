import sys
from collections import deque
sys.stdin = open("input.txt", "r")


n, m = map(int, input().split())
adj = [[] for _ in range(n+1)]

for _ in range(m):
    a, b = map(int, input().split())
    adj[b].append(a)


def bfs(v):
    q = deque([v])
    visited = [False]*(n+1)
    visited[v] = True
    cnt = 1
    while q:
        v = q.popleft()
        for e in adj[v]:
            if not visited[e]:
                q.append(e)
                visited[e] = True
                cnt += 1
    return cnt


result = []
max_value = -1

for i in range(1, n+1):
    c = bfs(i)
    if c > max_value:
        result = [i]
        max_value = c
    elif c == max_value:
        result.append(i)
        max_value = c
for e in result:
    print(e, end=' ')
