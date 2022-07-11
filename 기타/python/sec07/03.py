import sys
sys.stdin=open("input.txt", "r")


def DFS(L, sum):
  global res
  if L==K:
    if 0<sum<=S: #양수만 체크. 음수는 항상 대칭구조가 만들어져 체크할 필요가 없다
      res.add(sum)
  else:
      DFS(L+1, sum+chuList[L]) #추를 왼쪽에 둔다
      DFS(L+1, sum-chuList[L]) #추를 오른쪽에 둔다
      DFS(L+1, sum) #chuList[L]추를 사용하지 않겠다

if __name__=="__main__":
  K= int(input())
  chuList = list(map(int, input().split()))
  S=sum(chuList) #총무게
  res=set() #중복 제거하면서 값을 추가하기 위해 set()사용
  DFS(0, 0) # L: chuList를 접근하는 인덱스(각 추를 가리킴), sum:측정할 수 있는 물의 무게.
  print(S-len(res))