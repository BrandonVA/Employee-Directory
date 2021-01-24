import React from "react";

const EmployeeList = (props) => {
  console.log(props.employees);
  //   const listOf;
  return (
    <div>
      <h1>Hello World I'm Learning React!!!</h1>
      <ul>
        {props.employees.map((employee, index) => (
          <li key={index}>{employee.name.first}</li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
