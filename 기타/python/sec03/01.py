import sys
sys.stdin=open("input.txt", "rt")


#입력값 받아와
#5개만큼 for문 돌면서 검사
n = input()

for i in range(5):
  string = input()
  upperString = string.upper()
  size = len(string)
  for j in range(size//2):
    if upperString[j] != upperString[-1-j]:
      print('#%d NO' %(i+1))
      break
  else:
      print('#%d YES' %(i+1))