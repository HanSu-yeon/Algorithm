import sys
sys.stdin=open("input.txt", "r")
''' 
상태트리에는 sum만 나타내겠음
가지 수 == 특정 금액의 동전 개수
             DFS(0,0)
               |
         ----------------                
5원 ->  0|   1|   2|   3|
        (0)  (5) (10)  (15)
        생           |
        략    ------------ 
10원         0|   1|    2|
            (10) (20)  (30) #20초과-->컷트
               
'''

def DFS(L, sum):
  global cnt
  
  if sum>t: #sum이 t보다 크면 컷트
    return
  
  if L==k: #말단노드까지 왔을때
    if sum==t: 
      cnt+=1  
  else:
    for i in range(coinCntList[L]+1): #i가 가닥수
      DFS(L+1, sum+(coinList[L]*i))

if __name__=="__main__":
  t=int(input())
  k=int(input())
  coinList=list() #동전 금액 --> 5 ,10 ,1
  coinCntList=list() #동전 개수 --> 3. 2, 5
  for i in range(1, k+1):
    coin, value =  map(int,input().split())
    coinList.append(coin)
    coinCntList.append(value)
  cnt=0
  DFS(0,0)
  print(cnt)
