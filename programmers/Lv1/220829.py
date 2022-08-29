def solution(array, commands):
    answer = []

    for x in commands:
        i, j, k = map(int, x)
        slice_arr = array[i-1:j]
        slice_arr.sort()
        answer.append(slice_arr[k-1])

    return answer
