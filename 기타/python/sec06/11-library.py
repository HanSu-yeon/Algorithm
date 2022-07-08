import sys
import itertools as it
sys.stdin=open("input.txt", "r")

N, K=map(int, input().split())
list= list(map(int, input().split()))
M=int(input())
cnt=0

for x in it.combinations(list, K):
  if sum(x)%M==0:
    cnt+=1
print(cnt)
