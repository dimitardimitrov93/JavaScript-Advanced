class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if ([...arguments].some(x => x === null || x === undefined || x === '') || salary < 0) {
            throw new Error('Invalid input!');
        }

        let newEmployee = {
            name: name,
            salary: salary,
            position: position,
        }

        if (!this.departments[department]) {
            this.departments[department] = {
                employees: [],
                salaries: [],

                get averageSalaries() {
                    return this.salaries.reduce((acc, x) => acc += x, 0) / this.employees.length;
                },

                get sortedEmployees() {
                    return this.employees.sort((a, b) => {
                        if (a.salary !== b.salary) {
                            return b.salary - a.salary;
                        } else {
                            return a.name.localeCompare(b.name);
                        }
                    });
                },
            }
        }

        this.departments[department].employees.push(newEmployee);
        this.departments[department].salaries.push(salary);
        return `New employee is hired. Name: ${newEmployee.name}. Position: ${newEmployee.position}`;
    }

    bestDepartment() {
        let sortedDepartments = Array.from(Object.entries(this.departments))
            .sort((a, b) => {
                return b[1].averageSalaries - a[1].averageSalaries;
            });

        return `Best Department is: ${sortedDepartments[0][0]}\nAverage salary: ${sortedDepartments[0][1].averageSalaries.toFixed(2)}\n${sortedDepartments[0][1].sortedEmployees.map(x => Object.values(x).join(' ')).join('\n')}`;
    }
}

let c = new Company();

let actual1 = c.addEmployee("Stanimir", 2000, "engineer", "Human resources");
let expected1 = "New employee is hired. Name: Stanimir. Position: engineer";

c.addEmployee("Stanimir", 123, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Velko", 1350, "HR", "Human resources");
console.log(c.bestDepartment());