const employee = {
        name: "Ana",
        streetAddress: "2125 Amsterdam Ave",
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
   const em2 ={...employee}
   em2.name= "Sam"
   em2.streetAddress= "11 Broadway"
return em2
  }

  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee.name = "Sam"
    employee.streetAddress= "12 Broadway"

    return employee
  }

  function deleteFromEmployeeByKey(employee, key) {
    // Alternate using ES6 Spread operators:
    // const newObj = { ...employee }
    const newObj = Object.assign({}, employee);
  
    delete newObj[key];
  
    return newObj;

  }

  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
  
    return employee;
  }