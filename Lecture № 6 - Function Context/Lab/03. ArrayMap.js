function arrayMap(arr, func) {
    let mappedArr = arr.reduce((acc, x) => {
        acc.push(func(x))
        return acc;
    }, []);

    return mappedArr;
}

let nums = [1,2,3,4,5];
console.log(arrayMap(nums,(item)=> item * 2)); 

let letters = ["a","b","c"];
console.log(arrayMap(letters,(l)=>l.toLocaleUpperCase()));