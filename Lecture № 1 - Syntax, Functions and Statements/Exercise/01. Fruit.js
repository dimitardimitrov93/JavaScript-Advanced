function solve(fruit, weightInGrams, pricePerKg) {
    let weightInKg = weightInGrams / 1000;

    let neededMoneyToBuyFruit = weightInKg * pricePerKg;
    console.log(`I need $${neededMoneyToBuyFruit.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`);
}

solve('orange', 2500, 1.80);
solve('apple', 1563, 2.35);