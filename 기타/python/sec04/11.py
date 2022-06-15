import sys
sys.stdin = open("input.txt","rt")


def Count(len):
  cnt=1
  endpoint = line[0] #지금은 첫번째 마굿간에 첫번째 말 배치. endpoint는 말의 배치 지점
  for i in range(1, n):
    if line[i]-endpoint >= len:
      cnt+=1
      endpoint=line[i]
  return cnt

n, c = map(int, input().split())
line=[]
for _ in range(n):
  tmp =int(input())
  line.append(tmp)

line.sort() #좌표 계산 필요 -->정렬
lt = 1
rt = line[n-1]
while lt < rt:
  mid=(lt+rt)//2 #가장 가까운 두 말의 거리
  if Count(mid)>=c: #Count함수: 배치할 수 있는 말의 마리수 리턴
    res=mid
    lt=mid+1
  else: #말 간격이 너무 크면 원하는 마리수(c)를 다 배치할 수 없음
    rt=mid-1
print(res)