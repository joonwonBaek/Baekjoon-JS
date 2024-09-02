function solution(orders, course) {
    const answer = [];
    
    // 조합 함수 구현
    const getCombinations = (arr, selectNumber) => {
        const results = [];
        
        if(selectNumber === 1) {
            return arr.map((value) => [value])
        }
        
        arr.forEach((fixed, index, origin) => {
            const rest = origin.slice(index + 1);
            const combinations = getCombinations(rest, selectNumber - 1);
            const attached = combinations.map((combinations) => [fixed, ...combinations]);
            results.push(...attached);
        });
        return results
    }
    course.forEach((n) => {
        const result = {};
        let max = 0;
        
        orders.forEach((order) => {
            const combinations = getCombinations([...order], n);
            combinations.forEach((combination) => {
                const menu = combination.sort().join("");
                if(result[menu]) {
                    result[menu] += 1;
                    max = max < result[menu] ? result[menu] : max;
                } else result[menu] = 1
            })
        })
        
        if(max >= 2) {
            for(const [key, value] of Object.entries(result)) {
                if(value === max) answer.push(key)
            }
        }
    })
    return answer.sort()
}