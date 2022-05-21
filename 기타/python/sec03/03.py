import sys
sys.stdin=open("input.txt","rt")

arr=list(range(21))   #0~20까지의 값을 가진 리스트가 생김(=초기화)

for _ in range(10):
  start, end=map(int, input().split())
  for i in range((end-start+1)//2):
    #스와프
    arr[start+i],arr[end-i]=arr[end-i], arr[start+i]
arr.pop(0) #idx0 제외하기

for x in arr:
  print(x, end=' ')