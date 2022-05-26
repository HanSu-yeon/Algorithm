import sys
sys.stdin=open("input.txt", "rt")

n = int(input())
#[[10, 13, 10, 12, 15], [12, 39, 30, 23, 11], [11, 25, 50, 53, 15], [19, 27, 29, 37, 27], [19, 13, 30, 13, 19]]
a = [list(map(int, input().split())) for _ in range(n)] 
m = int(input()) #회전 명령 수
for i in range(m):
  hang, direction, k = map(int, input().split())
    #방향 체크
  if direction==0: #왼쪽
    for _ in range(k): #k번 회전
        a[hang-1].append(a[hang-1].pop(0)) #맨 앞의 요소를 뽑아 맨뒤에 추가해준다-->1회전
  else: #오른쪽으로 회전
    for _ in range(k):
        a[hang-1].insert(0,a[hang-1].pop()) #맨 뒤의 요소를 맨 앞에 넣기

#회전이 잘 돌았는지 확인
# for x in a:
#   print(x)

res=0
start=0
end=n-1
for i in range(n): #i:행번호
  for j in range(start, end+1): #부분만 돌꺼니까
    res+=a[i][j]
  if i<n//2:
    start+=1
    end-=1
  else:
    start-=1
    end+=1
print(res)