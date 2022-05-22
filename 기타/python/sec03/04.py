import sys
sys.stdin=open("input.txt", "rt")


n = int(input())
a = list(map(int, input().split()))
m = int(input())
b = list(map(int, input().split()))

p1=p2=0
c=[]

while p1<n and p2<m: #하나의 pointer가 끝날때까지
  if a[p1]<=b[p2]:
    c.append(a[p1])
    p1+=1
  else:
    c.append(b[p2])
    p2+=1
#남은 자료 확인
if p1<n: #p1이 n까지 못가고 남은거
  c=c+a[p1:]
if p2<m: #p2가 가리키는 b리스트의 자료가 남은거
  c=c+b[p2:]

for x in c: #배열의 요소들 출력
  print(x, end=' ')