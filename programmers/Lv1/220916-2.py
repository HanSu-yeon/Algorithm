cnt = 0


def solution(num):

    global cnt

    if num == 1 and cnt > 0:
        return cnt
    elif num == 1:
        return 0
    elif num != 1 and cnt == 500:
        return -1

    cnt += 1

    if num % 2 == 0:
        num = num // 2

    else:
        num = (num*3)+1

    return solution(num)
