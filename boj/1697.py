import sys
from collections import deque
sys.stdin = open("input.txt", "r")

MAX = 100001
n, k = map(int, input().split())
visited = [0]*MAX

# now_node : 정점


def bfs():
    q = deque([n])  # 호출할때 start node를 큐에 넣고 시작한다
    while q:
        now_node = q.popleft()
        if now_node == k:
            return visited[now_node]
        for next_node in (now_node-1, now_node+1, now_node*2):
            # not visited[next_node]: 방문하지 않았다면
            if 0 <= next_node < MAX and not visited[next_node]:
                # 새로운 정점 = 이전 정점 + 1 --> 최소시간에 대한 정보를 배열에 담아준다
                visited[next_node] = visited[now_node] + 1
                q.append(next_node)  # 다시 큐에 넣어준다


print(bfs())
