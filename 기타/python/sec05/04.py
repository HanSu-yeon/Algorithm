import sys
sys.stdin=open("input.txt","rt")

n = input()
stack=[]
res=0
  
for x in n:
  if x.isdecimal():
    stack.append(int(x))
  else:
    if x=='+':
      n1=stack.pop()
      n2=stack.pop()
      stack.append(n2+n1)
    elif x=='-':
      n1=stack.pop()
      n2=stack.pop()
      stack.append(n2-n1)
    elif x =='*':
      n1=stack.pop()
      n2=stack.pop()
      stack.append(n2*n1)
    elif x=='/':
      n1=stack.pop()
      n2=stack.pop()
      stack.append(n2/n1)
print(stack[0])