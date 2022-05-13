#최솟값 구하기1
 
arr=[5, 3, 7, 9, 2, 5, 2, 6]
arrMin = float('inf')  #파이썬에서 가장 큰 값으로 초기화

for i in range(len(arr)):
  if arr[i] < arrMin:
    arrMin = arr[i]

print(arrMin)

#최솟값 구하기2
arr=[5, 3, 7, 9, 2, 5, 2, 6]
arrMin = arr[0]  

for i in range(1, len(arr)):
  if arr[i] < arrMin:
    arrMin = arr[i]

print(arrMin)

#최솟값 구하기3
arr=[5, 3, 7, 9, 2, 5, 2, 6]
arrMin = float('inf') 

for x in arr:
  if x < arrMin:
    arrMin = x

print(arrMin)