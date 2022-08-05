import sys
from collections import deque
sys.stdin = open("input.txt", "r")
# 순서
# 가장 큰 중요도를 가지는 문서가 맨 앞에 올때까지 while문 돌린다
# count(뽑은 문서의 개수)를 1증가 시킴
# 이 문서가 m과 같은지 체크 --> 맞으면 count수 출력
# 그렇지 않다면 그 원소를 뽑는다


testCase = int(input())  # 테스트케이스 수


for _ in range(testCase):
    n, m = map(int, input().split(' '))
    queue = list(map(int, input().split(' ')))
    # (원소, 인덱스) 튜플 형태로 뽑아 리스트에 저장한다
    queue = [(e, idx) for idx, e in enumerate(queue)]
    print(queue)

    count = 0  # 뽑은 문서의 개수
    while True:
        # 큐의 가장 앞쪽에 있는 원소의 중요도가 현재 큐에서의 가장 큰 중요도와 동일하다면 == 중요도가 가장 높은 문서가 가장 앞쪽에 위치해 있다면
        if queue[0][0] == max(queue, key=lambda x: x[0])[0]:
            count += 1
            if queue[0][1] == m:
                print(count)
                break
            else:
                queue.pop(0)

        else:  # 큐의 가장 앞쪽에 있는 원소가 중요도가 가장 높은 문서가 아니라면
            queue.append(queue.pop(0))
