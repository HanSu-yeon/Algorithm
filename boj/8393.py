import sys
sys.stdin=open("input.txt","r")

n=int(input())
res=0
for i in range(1, n+1):
  res+=i
print(res)