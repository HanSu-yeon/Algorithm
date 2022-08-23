import sys
from collections import deque
sys.stdin = open("input.txt", "r")

input = sys.stdin.readline
n, k = map(int, input().split())
deque_arr = deque([i for i in range(1, n+1)])  # 1부터 n까지의 원소 삽입

res = []  # 결과

# 큐가 빌때까지 반복문을 돌린다
while deque_arr:  # while대신 for i in range(n): 도 가능

    for i in range(k-1):  # k-1번 "왼쪽으로 돌리기" 수행
        x = deque_arr.popleft()
        deque_arr.append(x)

    del_num = deque_arr.popleft()  # k번째 위치한 원소 제거
    res.append(del_num)

# 정답 출력
print('<', end='')
for i in range(len(res)):
    if i == len(res)-1:
        print(res[i], end='')
    else:
        print(res[i], end=', ')
print('>')
