#라이브러리를 이용해 수열 추측하기
import sys
import itertools as it
sys.stdin=open("input.txt", "r")

#어떤 조건을 만족하는 원소만 뽑아서 순열, 조합을 만들어라 --> 라이브러리 안통함
n, f=map(int, input().split())
b=[1]*n
cnt=0
for i in range(1, n):
  b[i]=b[i-1]*(n-i)//i
  
a=list(range(1, n+1)) #a를 가지고 순열 구하기
for tmp in it.permutations(a): 
  sum=0
  for L, x in enumerate(tmp):
    #b리스트의 같은 인덱스 값과 x를 곱해야 되니까 index번호(L)가 필요
    sum+=(x*b[L])
  if sum==f:
    for x in tmp:
      print(x, end=' ')
    break #13번째줄 for문을 break함