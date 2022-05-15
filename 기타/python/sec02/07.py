import sys
sys.stdin=open("input.txt", "rt")

n = int(input())
a = list(map(int, input().split()))

def digit_sum(x):
  sum = 0
  for i in str(x):  #str(): int를 문자열로 바꿔줌
    sum+=int(i)
  return sum
    
max = -2147000000 #또는 max=float('-inf'): 음의 무한대
for x in a:
  total = digit_sum(x) 
  if total > max: 
    max=total  
    res=x  #res에 합이 가장 큰 자연수 저장

print(res)