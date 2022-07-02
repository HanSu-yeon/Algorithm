import sys
sys.stdin=open("input.txt","r")

A,B,C,D =sys.stdin.readline().split()


print(A,B,C,D)

AB=A+B
CD=C+D
print(int(AB)+int(CD))
  