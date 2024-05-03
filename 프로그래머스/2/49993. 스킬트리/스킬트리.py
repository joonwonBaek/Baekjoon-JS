def solution(skill, skill_trees):
    answer = [0]*len(skill_trees)
    result = 0
    for i in range(len(skill_trees)):
        skill_arr = list(skill)
        for s in skill_trees[i]:
            if s in skill_arr:
                if skill_arr.index(s) == 0:
                    skill_arr = skill_arr[1:]
                    continue
                else:
                    answer[i] = -1
                    break
                
    return answer.count(0)