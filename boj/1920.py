import sys
sys.stdin = open("input.txt", "r")

n = int(input())
n_list = list(map(int, input().split()))
m = int(input())
m_list = list(map(int, input().split()))
n_list.sort()

# 방법1


def binary_search(value, start, end):
    if start > end:
        return False

    mid = (start+end)//2
    if n_list[mid] > value:
        return binary_search(value, start, mid-1)
    elif n_list[mid] < value:
        return binary_search(value, mid+1, end)
    else:
        return True


for item in m_list:
    if binary_search(item, 0, n-1):  # true라면 == 해당 데이터가 존재한다
        print(1)
    else:
        print(0)

# 방법2
'''
nSet을 list로 받으면 시간초과가 발생하는데 set자료형을 이용하면 시간초과 발생하지 않는다
list에서의 x in s연산의 평균 시간 복잡도: O(n)
set에서의 x in s연산의 평균 시간 복잡도: O(1)
'''
n = int(input())
nSet = set(map(int, input().split()))
m = int(input())
mList = list(map(int, input().split()))


for x in mList:
    if x not in nList:
        print(0)
    else:
        print(1)
