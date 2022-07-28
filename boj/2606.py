from collections import deque
import sys
sys.stdin = open("input.txt", "r")


totalCom = int(input())
n = int(input())
adj = [[] for _ in range(totalCom+1)]
visited = [False]*(n+1)
cnt = 0
for _ in range(n):
    com1, com2 = map(int, input().split())
    adj[com1].append(com2)
    adj[com2].append(com1)


def dfs(now_node):
    global cnt
    cnt += 1
    visited[now_node] = True

    for next_node in adj[now_node]:
        if not visited[next_node]:
            dfs(next_node)


dfs(1)
print(cnt-1)
