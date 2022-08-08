def solution(x):
    answer = True
    sum = 0  # 자릿수의 합
    for i in str(x):
        sum += int(i)

    if x % sum == 0:
        return answer

    answer = False
    return answer
