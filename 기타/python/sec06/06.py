import sys
from itertools import product
sys.stdin=open("input.txt","r")
input=sys.stdin.readline #읽는 속도 빨라짐
#만약 문자열을 읽는다면 s=input().rstrip(); 이렇게 읽어야 함
def DFS(L):
  global cnt
  if L==m:
    for j in range(m):
      print(res[j], end=' ')
    print()
    cnt+=1
  else:
    for i in range(1, n+1): #간선 수는 n만큼
      res[L]=i
      DFS(L+1) #호출을 간선(가닥)으로 표현

if __name__=="__main__":
  n, m = map(int, input().split())
  res=[0]*m
  cnt=0
  DFS(0) 
  print(cnt)