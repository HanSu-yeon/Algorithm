import sys
sys.stdin = open("input.txt", "r")


arr = list(map(int, input().split()))

descArr = sorted(arr, reverse=True)
ascArr = sorted(arr)

if arr == ascArr:
    print("ascending")
elif arr == descArr:
    print("descending")
else:
    print("mixed")
