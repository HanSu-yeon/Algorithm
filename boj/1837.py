import sys
sys.stdin=open("input.txt","r")


def check(p, k):
  for i in range(2, k):
    if P % i == 0:
      print("BAD ", i)
      return
  print("GOOD")
  return

P, K =map(int, input().split())
check(P, K)



