import heapq
import sys
sys.stdin = open("input.txt", "r")

input = sys.stdin.readline


def pop(heap):  # heap과 deleted는 global변수
    while len(heap) > 0:  # 삭제할 원소를 찾기
        data, id = heapq.heappop(heap)  # 꺼내기
        if not deleted[id]:  # 처음 삭제하는 원소일 때
            deleted[id] = True
            return data
    return None  # 삭제할 원소가 없으면 None반환


for _ in range(int(input())):  # 테스트 케이스만큼 반복
    k = int(input())  # 연산의 개수 k
    min_heap = []  # 최소 힙(heapq는 최소 힙)
    max_heap = []  # 최대 힙(삽입/삭제할 때 음수로 넣기)
    current = 0  # 삽입할 원소의 인덱스(id값)
    deleted = [False]*(k+1)  # 각 원소의 삭제여부. 다른 큐에서 삭제되었는지 판단할 수 있다
    for i in range(k):
        cmd = input().split()
        operator, data = cmd[0], int(cmd[1])
        if operator == 'D':  # 삭제 연산
            if data == -1:
                pop(min_heap)
            elif data == 1:
                pop(max_heap)
        elif operator == "I":  # 삽입 연산
            heapq.heappush(min_heap, (data, current))
            heapq.heappush(max_heap, (-data, current))
            current += 1
    max_value = pop(max_heap)
    if max_value == None:
        print("EMPTY")
    else:
      # max_value는 min_heap에서도 꺼내지므로
        heapq.heappush(min_heap, (-max_value, current))
        print(-max_value, pop(min_heap))
