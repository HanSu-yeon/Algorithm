import sys
sys.stdin=open("input.txt", "rt")

n, k = map(int, input().split())
a = list(map(int,input().split()))
res = set()

for i in range(n):
  for j in range(i+1, n):
    for m in range(j+1, n): #m은 j뒤편부터 돌아야함
      res.add(a[i]+a[j]+a[m])
res=list(res)
res.sort(reverse=True) #내림차순 정렬
print(res[k-1]) #k번째 == k-1번 인덱스