import sys
sys.stdin = open("input.txt", "r")
# 가장 많은 상금 받은 사람의 상금을 출력
n = int(input())
money = []
for _ in range(n):
    lst = sorted(list(map(int, input().split())))

    if len(set(lst)) == 1:
        money.append(50000+lst[0]*5000)
    elif len(set(lst)) == 2 and lst[1] == lst[2]:  # 같은 눈 3개
        money.append(10000+lst[2]*1000)
    elif len(set(lst)) == 2 and lst[1] != lst[2]:  # 같은 눈이 2개씩 두 쌍
        money.append(2000+lst[1]*500+lst[2]*500)
    elif len(set(lst)) == 3:  # 같은 눈 2개
        if lst[0] == lst[1]:
            money.append(1000+lst[0]*100)
        elif lst[1] == lst[2]:
            money.append(1000+lst[1]*100)
        elif lst[2] == lst[3]:
            money.append(1000+lst[2]*100)
    else:
        money.append(lst[3]*100)

print(max(money))


# 다른 풀이

def money():
    lst = sorted(list(map(int, input().split())))

    if len(set(lst)) == 1:
        return 50000+lst[0]*5000
    if len(set(lst)) == 2:
        if lst[1] == lst[2]:  # 같은 눈 3, 다른 눈 1개일 경우
            return 10000+lst[2]*1000
        else:  # 같은 눈 2쌍
            return 2000+(lst[1]+lst[2])*500

    for i in range(3):
        if lst[i] == lst[i+1]:
            return 1000+lst[i]*100
    return lst[-1]*100


n = int(input())

print(max(money() for i in range(n)))
