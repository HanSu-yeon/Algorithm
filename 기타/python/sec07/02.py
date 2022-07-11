import sys
sys.stdin=open("input.txt", "r")


def DFS(L, sum):
  global res
  if L==n+1:
    if sum>res:
      res=sum
  else:
    #상담한다면
    if L+T[L]<=n+1:
      DFS(L+T[L], sum+P[L])
    #상담안한다면
    DFS(L+1, sum)



if __name__=="__main__":
  n=int(input())
  T=list()
  P=list()
  for i in range(n):
    a, b = map(int, input().split())
    T.append(a)
    P.append(b)
  T.insert(0,0) #0번 인덱스에 값 넣기 why? 날짜와 인덱스 번호를 맞춰주려고
  P.insert(0,0)
  res=-2147000000
  DFS(1,0)
  print(res)