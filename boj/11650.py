import sys
sys.stdin=open("input.txt","r")
#파이썬의 기본 정렬 라이브러리는 기본적으로 튜플의 인덱스 순서대로 오름차순 정렬한다 --> key값 따로 지정해 주지 않아도 o
n = int(input())
arr=[]
for _ in range(n):
  xy =  input().split()
  arr.append((int(xy[0]),int(xy[1])))

arr=sorted(arr)
for x in arr:
  print(x[0], x[1])