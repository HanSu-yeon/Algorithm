def solution(s, n):
    answer = ''
    for x in s:
        if 65 <= ord(x) <= 90:  # 대문자라면
            alpha = ord(x)+n
            if alpha > 90:
                answer += chr(alpha-26)
            else:
                answer += chr(alpha)
        elif 97 <= ord(x) <= 122:  # 소문자라면
            alpha = ord(x)+n
            if alpha > 122:
                answer += chr(alpha-26)
            else:
                answer += chr(alpha)
        elif ord(x) == 32:  # 공백이라면
            answer += ' '
    return answer
