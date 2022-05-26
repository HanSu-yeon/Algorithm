import sys
sys.stdin=open("input.txt", "rt")

#상하좌우 비교할 값(네 방향 탐색) 초기화
dx=[-1, 0, 1, 0]
dy=[0, 1, 0, -1]

n = int(input())
a = [list(map(int, input().split())) for _ in range(n)] 
a.insert(0,[0]*n)
a.append([0]*n)

cnt=0
for x in a:
  x.insert(0, 0)
  x.append(0)
  
for i in range(1, n+1):
  for j in range(1, n+1):
    #상하좌우 탐색
    #조건이 모두 참이어야 봉우리
    if all(a[i][j]>a[i+dx[k]][j+dy[k]] for k in range(4)):
      cnt+=1
      
print(cnt)