import sys
sys.stdin=open("input.txt", "rt")

n = int(input())
a = [list(map(int, input().split())) for _ in range(n)]

res=0

start=end=n//2
for i in range(n):
  for j in range(start, end+1):
    res+=a[i][j]
  if i < n//2: 
    start-=1
    end+=1
  else: #중간지점 지나면
    start+=1
    end-=1
print(res)