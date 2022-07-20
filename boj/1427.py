import sys
sys.stdin=open("input.txt","r")

'''
sort()를 사용한 풀이 - 내가 푼 방식
'''
n = input()
arr=list()
for x in n:
  arr.append(int(x))
  
  
arr.sort(reverse=True)
for y in arr:
  print(y, end='')
  
'''
다른 사람 풀이
1. 자릿수를 기준으로 정렬하므로 9부터 0까지 차례대로 확인한다
2. 각 숫자에 대하여 해당 숫자의 개수를 계산하여 출력한다
'''
arr=input()

for i in range(9, -1,-1):  
  for j in  arr:
    if int(j)==i:
      print(i, end='')