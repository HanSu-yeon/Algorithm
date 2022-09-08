import sys
sys.stdin = open("input.txt", "r")

n, c = map(int, input().split())
array = []
for i in range(n):
    array.append(int(input()))

array.sort()


start = 1  # 공유기 사이 최소값   그런데 array[1]-array[0] 이건 왜 틀릴까..?
end = array[-1]-array[0]  # 공유기 사이 최대값
answer = 0
while start <= end:
    mid = (start+end)//2
    value = array[0]
    count = 1

    for i in range(1, len(array)):
        if array[i] >= value+mid:
            count += 1
            value = array[i]

    if count >= c:
        start = mid + 1
        answer = mid
    else:
        end = mid-1


print(answer)
