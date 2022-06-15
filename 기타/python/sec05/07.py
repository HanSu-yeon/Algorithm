import sys
from collections import deque
sys.stdin=open("input.txt","rt")

need=input()
n = int(input())

for i in range(n):
  plan = input()
  dq = deque(need) #plan 읽을 때마다 que를 필수과목으로 초기화
  for x in plan:
    if x in dq: #plan에 필수과목을 넣었니?
      if x != dq.popleft(): #필수과목이 순서대로 짜여져 있는가
        print("#%d NO" %(i+1))
        break
  else: #정상적으로 끝났다면 = 필수과목 순서 다 맞았다
    if len(dq) == 0: #필수과목을 plan에 다 넣었는가
      print("#%d YES" %(i+1))
    else:
      print("#%d NO" %(i+1))