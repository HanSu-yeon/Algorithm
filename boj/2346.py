from collections import deque
import sys
sys.stdin = open("input.txt", "r")

input = sys.stdin.readline
n = int(input())
arr = list(map(int, input().split()))
d = deque()  # 덱 초기화
res = []  # 풍선 번호
# 덱에 원소를 삽입할 때 (종이에 적힌 숫자, 풍선번호) 형태로 삽입한다
for i in range(n):
    d.append((arr[i], i+1))

# 가장 앞에있는 풍선(원소)을 꺼내 종이에 적힌 수를 확인한다
current, balloon_num = d.popleft()
res.append(balloon_num)

# 덱에서 원소 하나 삭제했으니까 n-1번 회전
for i in range(n-1):  # 원소 모두 꺼내기

    if current > 0:  # 양수라면
        for j in range(current-1):  # 왼쪽으로 currnet-1번 '왼쪽으로 돌리기'수행
            x = d.popleft()
            d.append(x)
    else:  # 음수라면 (참고로 0은 없다)
        for j in range(-current):  # |current|번 '오른쪽으로 돌리기'수행
            x = d.pop()
            d.appendleft(x)
    # 원소 추출해서 current, balloon_num을 현재값으로 초기화
    current, balloon_num = d.popleft()
    res.append(balloon_num)

# 결과 출력
for x in res:
    print(x, end=' ')
