import sys
from collections import deque
sys.stdin=open("input.txt","r")
#(total-tsum) = 앞으로 따져봐야할 남은 바둑이들 무게(노드들) 합
#tsum: 부분집합에 넣든 안넣든 탐색한(지나온) 바둑이들 무게(노드들의) 합 = 현재까지 탐색한 무게들
#sum: 부분집합의 합
def DFS(L, sum, tsum):
  global result
  if sum+(total-tsum)<result: #(부분집합의 합 + 앞으로 탐색할 노드들 합)이 result보다 작다면 즉 현재 저장된 최대값보다 작다면 밑의 노드를 탐색할 필요 없음 
    return 
  if sum > c:
    return
  
  if L==n: #말단노드에 도착 ==부분집합 1개 완성
    if result < sum:
      result=sum
  else:
    DFS(L+1,sum+a[L], tsum+a[L]) #tsum+a[L]은 무조건 더해줌
    DFS(L+1,sum, tsum+a[L])
    
  
  
  
if __name__=="__main__":
  c,n = map(int, input().split())
  a=[0]*n #바둑이들의 각 무게를 a에 저장
  result=-2147000000
  for i in range(n):
    a[i]=int(input())
  total=sum(a) #바둑이들 무게 총 합
  DFS(0,0,0)
  print(result)