import sys
sys.stdin = open("input.txt", "r")

n = int(input())
arr = []
for _ in range(n):  # 입력값 배열에 넣기
    arr.append(int(input()))
right_arr = []  # 오른쪽
left_arr = []  # 왼쪽

for x in arr:
    if len(right_arr) == 0:  # 배열이 비었으면
        right_arr.append(x)
    elif x > max(right_arr):
        right_arr.append(x)


for y in reversed(arr):
    if len(left_arr) == 0:
        left_arr.append(y)
    elif y > max(left_arr):
        left_arr.append(y)

print(len(right_arr))
print(len(left_arr))

# ---다른사람 풀이---


def ascending(arr):
    now = arr[0]
    result = 1
    for i in range(1, len(arr)):
        if now < arr[i]:
            result += 1
            now = arr[i]
    return result


n = int(input())
arr = []

for _ in range(n):
    arr.append(int(input()))

print(ascending(arr))
arr.reverse()
print(ascending(arr))
