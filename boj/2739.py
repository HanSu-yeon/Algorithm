import sys
sys.stdin=open("input.txt","r")

N=int(sys.stdin.readline())
for i in range(1, 10):
  print("%d * %d = %d" %(N, i, N*i ) )