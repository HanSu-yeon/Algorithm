import sys
sys.stdin=open("input.txt","r")

n=int(input())

arr=[]
for _ in range(n):
  t=int(input())
  arr.append(t)

dp=[0]*101
dp[1]=1
dp[2]=1
dp[3]=1

for i in range(4, 101):
  dp[i]=dp[i-3]+dp[i-2]

for x in arr:
  print(dp[x])