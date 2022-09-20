def solution(price, money, count):
    answer = 0
    total = 0
    for i in range(1, count+1):  # 필요 금액
        total += i*price

    if total > money:  # 금액이 부족할때
        return total-money
    else:
        return answer
