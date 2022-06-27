import sys
sys.stdin=open("input.txt","r")


n = int(input())
arr=[]
for i in range(n):
  num = int(input())
  arr.append(num)
arr.sort()
for x in arr:
  print(x)

  