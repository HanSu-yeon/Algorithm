import sys
sys.stdin=open("input.txt","r")

n = int(input())

bodyInfo = []

for i in range(n):
  height, weight = map(int, input().split())
  bodyInfo.append((height, weight))
bodyInfo.sort(reverse=True)

cnt=0
largestWeight=0
for height, weight in bodyInfo:
  if weight > largestWeight:
    largestWeight = weight
    cnt+=1
    
print(cnt)