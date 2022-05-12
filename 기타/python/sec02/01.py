import sys
sys.stdin=open("input.txt", "rt")

'''
K번째 약수
https://hansulog.tistory.com/2
'''
#내가 푼 방식
N, K = input().split()
N =int(N)
K =int(K)

arr = []

for i in range(1, N+1):
  if N % i ==0:
    arr.append(i)

if len(arr) < K:
  print(-1)
else:
  print(arr[K-1])
  
#강사님 풀이
n, k = map(int, input().split())
cnt = 0 #개수 세는 용

for i in range(1, n+1):
  if n%i==0:
    cnt+=1
  if cnt==k:
    print(i)
    break
else:
  print(-1)