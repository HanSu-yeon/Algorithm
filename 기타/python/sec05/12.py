import sys
import heapq as hq
sys.stdin=open("input.txt","rt")
'''
파이썬에는 max heap이 구현되어 있지 않다 
--> 내림차순 정렬을 위해서는 부호를 바꾼뒤 최소 힙을 이용하여 정렬하고 
다시 부호를 바꿔주어야 한다
1. 모든 원소에 -를 붙여 heap에 삽입
2. heap의 원소를 꺼낼때는 -를 붙여 출력
'''
heap=[]

while True:
  num = int(input())
  if num == -1:
    break
  if num == 0:
    if len(heap)==0:
      print(-1)
    else:
      print(-hq.heappop(heap))
  else:
    hq.heappush(heap, -num)