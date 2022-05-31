import sys
sys.stdin=open("input.txt","r")

#len이 답이 될 수 있는지 확인하는 과정
def Count(len):
  cnt=0
  for x in Line:
    cnt+=(x//len)
  return cnt

k, n=map(int,input().split())
Line=[]
res=0
largest=0 #가장 긴 랜선

for i in range(k):
  tmp = int(input())
  Line.append(tmp)
  largest = max(largest, tmp)

start=1
end=largest
while start <= end:
  mid = (start+end)//2  #mid=랜선의 길이
  if Count(mid)>=n:
    res=mid
    start=mid+1
  else:
    end=mid-1
print(res)