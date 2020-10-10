function solve(dataInput, criteriaInput) {
    let dataArr = JSON.parse(dataInput);
    let criteriaTokens = criteriaInput.split('-');
    let shouldPrintAll = false;
    let propertyCriteria;
    let valueCriteria;

    if (criteriaTokens[0] !== 'all') {
        propertyCriteria = criteriaTokens[0];
        valueCriteria = criteriaTokens[1];
    } else {
        shouldPrintAll = true;
    }
    
    if (!shouldPrintAll) {
        dataArr.filter(criteria)
            .map((employee, index) => {
                console.log(`${index}. ${employee.first_name} ${employee.last_name} - ${employee.email}`);
            });
    } else {
        dataArr.map((employee, index) => {
            console.log(`${index}. ${employee.first_name} ${employee.last_name} - ${employee.email}`);
        });
    }

    function criteria(employee) {
        if (employee[propertyCriteria] === valueCriteria) {
            return true;
        }

        return false;
    }
}

solve(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
    'last_name-Johnson'
);

solve(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`, 
'all');