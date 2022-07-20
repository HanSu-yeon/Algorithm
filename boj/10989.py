import sys
sys.stdin=open("input.txt","r")
#
# 계수 정렬 사용. 

n=int(sys.stdin.readline())
arr=[0]*10001

for _ in range(n):
  data = int(sys.stdin.readline())
  arr[data]+=1

for i in range(10001):
  if arr[i] != 0:
    for j in range(arr[i]):
      print(i)
    