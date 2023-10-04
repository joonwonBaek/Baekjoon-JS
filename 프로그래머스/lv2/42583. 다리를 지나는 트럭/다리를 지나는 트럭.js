function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
    let cnt = 0;
    let bridge = new Array(bridge_length).fill(0);
    let bridge_sum = 0;
    
    while(truck_weights.length > 0) {
        cnt ++;
        bridge_sum -= bridge.shift();
        if(bridge_sum + truck_weights[0] <= weight) {
            bridge_sum += truck_weights[0];
            bridge.push(truck_weights.shift());
        }
        else {
            bridge.push(0);
        }
    }
    return cnt+bridge.length;
}