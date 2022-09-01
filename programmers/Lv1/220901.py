# 올바른 괄호

def solution(s):
    answer = True
    stack = []
    for i in range(len(s)):

        if i == 0 and s[i] == ')':  # 첫번째 원소가 ')'라면 더이상 볼 필요도 없다
            return False

        if s[i] == ')':
            if stack:  # 스택이 비어있지 않다면
                top = stack.pop()  # 스택의 top을 꺼내
                if top == '(':  # 짝궁이 맞는지 확인
                    continue
                else:  # 짝꿍이 맞지 않는다면
                    return False
        else:  # 원소가 '('면
            stack.append(s[i])

    if len(stack) == 0:
        return answer
    else:
        return False
