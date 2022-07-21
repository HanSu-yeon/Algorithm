import sys
sys.stdin=open("input.txt","r")

n= int(input())
A=list(map(int, input().split()))
B=list(map(int, input().split()))

A.sort(reverse=True)
sum=0
for x in A:
  minValue= min(B)
  sum +=minValue * x
  B.remove(minValue)
print(sum)