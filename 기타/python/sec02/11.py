import sys
sys.stdin=open("input.txt", "rt")


n = int(input())
scoreSheet= list(map(int, input().split()))
result=[0]*n

for i in range(n):
  if scoreSheet[i]==1: #점수표가 1일때
    if result[i-1]>0:  #앞의 문제가 맞았을 경우
      score = result[i-1]+1
      result[i] =score
    else: #앞의 문제가 틀렸을 경우
      score = 1
      result[i] =score
  
print(sum(result))