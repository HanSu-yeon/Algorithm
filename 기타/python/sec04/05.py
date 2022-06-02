import sys
sys.stdin=open("input.txt","r")

n=int(input())

lists=[]
for i in range(n):
  height, weight = map(int, input().split())
  lists.append((height, weight))
#키 순으로 정렬(내림차순)
lists.sort(reverse=True)

#최대값 찾기
largest=0
cnt=0
for height, weight in lists:
  if weight>largest: #최대값 갱신
    largest=weight
    cnt+=1
print(cnt)