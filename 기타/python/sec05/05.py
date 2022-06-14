import sys
from collections import deque
sys.stdin=open("input.txt","rt")

n, k=map(int, input().split())
dq=list(range(1,n+1))
dq=deque(dq) #리스트가 deque자료구조로 바뀜

while dq:
  for _ in range(k-1):
    current=dq.popleft()
    dq.append(current)
  dq.popleft() #k번째 수 삭제
  if len(dq)==1: #왕자가 1명 남으면
    print(dq[0])
    dq.popleft() # --> dq는 False가 되면서 반복문 멈춤