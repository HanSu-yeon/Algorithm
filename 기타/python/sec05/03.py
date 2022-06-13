import sys
sys.stdin=open("input.txt", "rt")

a=input()
stack=[]
res=''

for x in a:
  if x.isdecimal(): #10진수 숫자면(피연산자)
    res+=x
  else: #연산자라면
      if x == "(":
        stack.append(x)
      elif x == "*" or x =="/":
        while stack and (stack[-1]=="*" or stack[-1]=="/"): 
          res+=stack.pop()
        stack.append(x)
      elif x=="+" or x=="-":
        while stack and stack[-1]!="(": #괄호 안에 있는 +나-가 아니라면
          res+=stack.pop()
        stack.append(x)
      elif x==")":
        while stack and stack[-1]!="(":
          res+=stack.pop()
        stack.pop()
        
while stack:
  res+=stack.pop()
print(res)


#악!어려워