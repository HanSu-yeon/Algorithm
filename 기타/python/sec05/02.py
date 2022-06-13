import sys
sys.stdin=open("input.txt","rt")

brackets =input()
stack=[]
cnt=0 #막대기 개수

for i in range(len(brackets)):
  if brackets[i] == "(": #여는 괄호
    stack.append(brackets[i])
  else: #닫는 괄호
    if brackets[i-1] == "(": #바로 앞 요소가 여는괄호라면 --> () --> 레이저
      stack.pop()
      cnt+=len(stack) #막대기 조각 카운팅
    else: #")"라면 --> 쇠막대기의 끝지점
      stack.pop()
      cnt+=1
print(cnt)

#첫번째 else안에 if와 else를 보면 뭐가 됐든 stack.pop을 한다--> 하나로 적어주면 더 좋다
'''
  else: #닫는 괄호
    stack.pop()
    if brackets[i-1] == "(": #바로 앞 요소가 여는괄호라면 --> () --> 레이저
      cnt+=len(stack) #막대기 조각 카운팅
    else: #")"라면 --> 쇠막대기의 끝지점
      cnt+=1
print(cnt)
'''