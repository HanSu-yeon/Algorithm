import sys
sys.stdin=open("input.txt","r")

num = int(sys.stdin.readline())

for i in range(num):  
    print(" "*i+"*"*(num-i))