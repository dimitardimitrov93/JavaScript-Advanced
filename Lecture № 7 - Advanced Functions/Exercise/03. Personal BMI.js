function solve(name, age, weight, heightCM ) {

    let heightM = heightCM / 100;
    let BMI = Math.round(weight / Math.pow(heightM, 2));
    let status;

    if (BMI < 18.5) {
        status = 'underweight';
    } else if (BMI < 25 && BMI >= 18.5) {
        status = 'normal';
    } else if (BMI < 30 && BMI >= 25) {
        status = 'overweight';
    } else if (BMI >= 30) {
        status = 'obese';
    }

    let resultObj = {
        name: name,
        personalInfo: {
            age: Math.round(age),
            weight: Math.round(weight),
            height: Math.round(heightCM),
        },
        BMI: BMI,
        status: status, 
    };

    if (status === 'obese') {
        resultObj['recommendation'] = 'admission required';
    }
    
    return resultObj;
}

solve('Peter', 29, 75, 182);
solve('Honey Boo Boo', 9, 57, 137);