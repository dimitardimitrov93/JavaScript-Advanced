function solve(arrInput) {

    let arr = arrInput.slice();
    let resultArr = arr
        .map(([width, height]) => ({
            width,
            height,
            area: () => width * height,
            compareTo(otherRect) {  
                let result = otherRect.area() - this.area();
                return result === 0
                    ? otherRect.width - this.width
                    : result;
            },
    }))
        .sort((a, b) => a.compareTo(b));

    return resultArr;
}

solve([[10, 5], [3, 20], [5, 12]]);
// solve([[1,20],[20,1],[5,3],[5,3]]);
