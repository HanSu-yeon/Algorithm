import sys
sys.stdin=open("input.txt", "r")


def DFS(L):
  global res
  if L==n: #종착점
    cha=max(peopleMoneyList)-min(peopleMoneyList)
    if cha<res:
      #세 금액이 다른지 체크
      tmp=set() #set(): 중복 허용x
      for x in peopleMoneyList:
        tmp.add(x)  
      if len(tmp)==3:
        res=cha
  else:
    for i in range(3):
      peopleMoneyList[i]+=moneyList[L]
      DFS(L+1)
      peopleMoneyList[i]-=moneyList[L] #백트래킹해서 더해줬던값 뺴주기

if __name__=="__main__":
  n = int(input())
  moneyList=[]
  peopleMoneyList=[0]*3 #A,B,C가 나눠가진 금액
  res=2147000000
  for _ in range(n):
    moneyList.append(int(input()))
  DFS(0)    
  print(res)