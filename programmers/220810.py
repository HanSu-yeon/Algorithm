def solution(arr1, arr2):
    answer = [[]*i for i in range(len(arr1))]
    print(answer)
    for i in range(len(arr1)):
        for j in range(len(arr1[i])):
            sum = arr1[i][j]+arr2[i][j]
            answer[i].append(sum)

    return answer
