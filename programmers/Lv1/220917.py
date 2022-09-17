# 제일 작은 수 제거하기

def solution(arr):
    answer = []

    arr.remove(min(arr))  # 배열에서 제일 작은 수 제거
    answer = arr
    if len(answer) == 0:  # 빈배열이면 배열에 -1 넣어 리턴
        answer.append(-1)
    return answer
