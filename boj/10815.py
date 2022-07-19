import sys
sys.stdin=open("input.txt","r")

n=int(input())
n_list=list(map(int, input().split()))
m=int(input())
m_list=list(map(int, input().split()))
n_list.sort()

def binary_search(value, start, end):
  if start > end:
    return False

  mid=(start+end)//2
  if n_list[mid] > value: #n_list[mid] 왼쪽에서 찾는다
    return binary_search(value, start, mid-1)
  elif n_list[mid] < value: #n_list[mid] 오른쪽에서 찾는다
    return binary_search(value, mid+1, end)
  else:
    return True

for item in m_list:
  if binary_search(item, 0, n-1):
    print(1, end=' ')
  else:
    print(0, end=' ')