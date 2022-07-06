import sys
sys.stdin=open("input.txt","r")

N=int(input())

for i in range(N-1,-1,-1):
  print(i*' '+(N-i)*'*')