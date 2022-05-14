import sys
sys.stdin=open("input.txt", "rt")

n, m  = map(int, input().split())


cnt = [0]*(n+m+3)  #리스트 0으로 초기화
max = -2147000000
#경우의 수 찾기
for i in range(1,n+1):
  for j in range(1,m+1):
    cnt[i+j] +=1

#최대값 찾기
for i in range(n+m+1): # +1을 해줘야 n+m까지 탐색한다
  if cnt[i] > max:
    max=cnt[i]
    
for i in range(n+m+1):
  if cnt[i] == max:
    print(i, end=' ')