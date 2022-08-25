import heapq
import sys
sys.stdin = open("input.txt", "r")
input = sys.stdin.readline

heap_q = []
n = int(input())  # 연산의 개수

for i in range(n):
    x = int(input())

    if x == 0:  # 삭제 연산이라면
        if len(heap_q) == 0:  # 힙이 비어있는 경우
            print(0)
        else:  # 힙이 비어있지 않은 경우
            absolute, original = heapq.heappop(heap_q)
            print(original)
    else:  # 삽입 연산이라면
        # 힙에 (|x|,x) 형태로 넣어준다
        heapq.heappush(heap_q, (abs(x), x))
