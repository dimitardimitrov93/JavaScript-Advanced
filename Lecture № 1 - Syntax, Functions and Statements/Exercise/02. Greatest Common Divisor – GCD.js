function solve(x, y) {

    while(y) {
        let z = y;
        y = x % y;
        x = z;
      }

    console.log(x);
}

solve(15, 5);
solve(2154, 458);