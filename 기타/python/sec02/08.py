import sys
sys.stdin=open("input.txt", "rt")
#1과 자기 자신(N)이 아닌 수로 나누어 떨어질경우 소수가 아니다

n = int(input())
checkList=[0]*(n+1)  
cnt=0

for i in range(2, n+1):
  if checkList[i]==0: #조건 만족하면 소수
    cnt+=1
    for j in range(i, n+1, i):
      checkList[j]=1

print(cnt)