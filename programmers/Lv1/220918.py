def solution(left, right):
    arr = dict()
    answer = 0
    for i in range(left, right+1):  # 탐색할 수
        arr[i] = []
        for j in range(1, (i//2)+1):  # 약수 구하고 딕셔너리에 저장
            if i % j == 0:
                arr[i].append(j)
        arr[i].append(i)

    for k, v in arr.items():
        if len(v) % 2 == 0:  # 짝수면
            answer += k
        else:
            answer -= k

    return answer
