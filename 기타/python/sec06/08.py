import sys
from itertools import product
sys.stdin=open("input.txt","r")
input=sys.stdin.readline 



def DFS(L):
  global cnt
  if L==m:
    for j in range(L):
      print(res[j], end=' ')
    print()
    cnt+=1
  else:
    for i in range(1, n+1):
      if ch[i]==0: #아직 사용하지 않은 숫자라면
        ch[i]=1
        res[L]=i
        DFS(L+1)
        #DFS함수 호출 이후 상황 =함수를 끝마치고 되돌아왔다
        ch[i]=0 #체크박스 되돌려준다



if __name__=="__main__":
  n,m =map(int, input().split())
  res=[0]*m
  cnt=0
  ch=[0]*(n+1)
  DFS(0)
  print(cnt)