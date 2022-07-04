import sys
sys.stdin=open("input.txt","r")

line = list(sys.stdin.readline())

for x in line:
  if x.islower():
    print(chr(97+(ord(x)+13-97)%26), end='')
  elif x.isupper():
    print(chr(65+(ord(x)+13-97)%26), end='')
  else:
    print(x, end='')