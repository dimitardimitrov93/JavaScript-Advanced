function solve(str) {
    let arr = JSON.parse(str);
    let resultObj = {};

    arr.forEach(obj => {
        Object.entries(obj).map(x => {
            let [key, value] = [...x];
            resultObj[key] = value;
        });
    });
    
    return resultObj;
}

solve(`[{"canFly": true},{"canMove":true, "doors": 4},{"capacity": 255},{"canFly":true, "canLand": true}]`);

solve(`[{"canMove": true},{"canMove":true, "doors": 4},{"capacity": 5}]`);