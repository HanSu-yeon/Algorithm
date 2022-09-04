import sys
sys.stdin = open("input.txt", "r")

n = int(input())
arr = []
for _ in range(n):  # 입력값 배열에 넣기
    arr.append(int(input()))
print(arr)
right_arr = []
left_arr = []

for x in arr:
    if len(right_arr) == 0:
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
