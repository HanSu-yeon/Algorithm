'''
True조건: 1. 문자열에 p와 y의 개수가 같은 경우, 2. p와 y가 하나도 없는 경우
False조건: p와 y의 개수가 다를 경우

'''


def solution(s):
    answer = True
    s = s.lower()  # 문자열을 소문자로 통일
    # count함수 사용해 p와 y의 개수를 센다
    p_cnt = s.count('p')
    y_cnt = s.count('y')
    if p_cnt == y_cnt:  # 개수가 같거나 둘 다 없는 경우
        return answer
    else:
        answer = False
        return answer


print(solution("zzooogp"))
