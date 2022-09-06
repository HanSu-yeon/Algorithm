# 없는 숫자 더하기
def solution(numbers):
    answer = 0
    for x in range(0, 10):
        if x not in numbers:
            answer += x
    return answer


# --다른 사람 풀이
def solution(numbers):
    return 45-sum(numbers)
