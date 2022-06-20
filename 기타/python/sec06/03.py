import sys
sys.stdin=open("input.txt","r")

def DFS(v):
  if v==n+1: #3까지는 원소니까 n+1이 되어야 함 -->n+1이 4면 함수 종료 ==부분집합 1개 완성
    for i in range(1, n+1): #완성된 부분집합 출력
      if check[i]==1:
        print(i, end=' ')
    print()
  else:
    check[v]=1 #부분집합으로 사용하겠다
    DFS(v+1)
    check[v]=0 #사용하지x
    DFS(v+1) #다음 원소로 넘어간다



if __name__=="__main__":
  n= int(input())
  check=[0]*(n+1) #원소를 사용한다 안한다 체크하는 check변수
  DFS(1)