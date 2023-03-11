// Write your solution in this file!

const employee = {
    name : "Penelope",
    streetAddress : "7 World Trade Center",
};


function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key] : value,
    };
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
        employee[key] = value;
        return employee;
};

function deleteFromEmployeeByKey(employee, key) {
    // spread operator
    const newEmployee = {...employee};
    delete newEmployee.name;
    return newEmployee;
};

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name;
    return employee;
};