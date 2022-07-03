import sys
sys.stdin=open("input.txt","r")

num = int(sys.stdin.readline())

for i in range(num,0,-1):
  print(i*"*")
