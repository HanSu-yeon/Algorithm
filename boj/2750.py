import sys
sys.stdin=open("input.txt","r")

n = int(input())
arr=list()

for _ in range(n):
  arr.append(int(input()))
'''
방법1. 내장함수 sort() 사용하여 문제 해결하기
시간복잡도: O(nlogn)
'''

arr.sort()

for x in arr:
  print(x)



'''
방법2.선택정렬 알고리즘으로 문제 해결하기
시간복잡도: O(n^2)
'''



for i in range(n):
  min_index = i #가장 작은 원소의 인덱스
  for j in range(i+1, n):
    if arr[min_index] > arr[j]:
      min_index = j
  arr[i], arr[min_index] = arr[min_index], arr[i] #swap
  
for x in arr:
  print(x)