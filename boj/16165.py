import sys
sys.stdin = open("input.txt", "r")

# N : 걸그룹 수
# M: 문제 수
퀴즈종류 0: 팀이름 - -> 멤버 이름 출력, 1: 멤버 이름 - -> 그룹 이름
N, M = map(int, input().split())
quiz = dict()
for _ in range(N):
    members = []
    team = input()
    num = int(input())
    for _ in range(num):
        members.append(input())
        members.sort()
    quiz[team] = members

# 퀴즈
for i in range(M):
    str = input()
    kind = int(input())
    if kind == 1:
        for k, v in quiz.items():
            if str in v:
                print(k)
    elif kind == 0:
        for x in quiz[str]:
            print(x)

# 다른 사람 풀이
N, M = map(int, input().split())
team_mem, mem_team = {}, {}

for i in range(N):
    team_name, mem_num = input(), int(input())
    team_mem[team_name] = []
    for j in range(mem_num):
        name = input()
        team_mem[team_name].append(name)
        mem_team[name] = team_name

for i in range(M):
    name, quiz_kind = input(), int(input())
    if quiz_kind:  # 1이면
        print(mem_team[name])
    else:
        for mem in sorted(team_mem[name]):
            print(mem)
