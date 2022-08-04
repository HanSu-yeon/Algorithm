def solution(n, m):
    answer = []

    # 작은 수 구하기
    minNum = min(n, m)
    # 최대 공약수
    for i in range(1, minNum+1):
        if n % i == 0 and m % i == 0:
            maxRes = i
    # 최소 공배수
    minRes = (n*m)/maxRes

    answer.append(maxRes)
    answer.append(minRes)

    return answer
