import sys
sys.stdin=open("input.txt", "rt")

n = int(input())
res=0

for i in range(n): #입력된 n만큼의 값을 읽어야 하기 때문에 for문 돌림
  tmp =input().split()
  tmp.sort()  #오름차순 정렬
  a, b, c =map(int, tmp)
  #값 비교
  if a==b and b==c:  #같은 눈이 3개
    money=10000+(a*1000)
  elif a==b or a==c:  #같은 눈이 2개
    money=1000+(a*100)
  elif b==c:  #같은 눈이 2개
    money=1000+(b*100)
  else:
    money=c*100
  #가장 큰 상금 찾기
  if res < money:
    res = money
  
  
print(res)