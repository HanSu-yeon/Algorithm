def solution(n):
    answer = 1000001
    for i in range(2, n):
        if n % i == 1:
            if answer > i:
                answer = i

    return answer


print(solution(12))
