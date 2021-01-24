import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

const EmployeeList = (props) => {
  //   console.log(props.employees.name.first);
  //   props.employees.forEach((item) => console.log(item.name.first));
  //   const listOf;
  return (
    <div>
      <ListGroup as="ul">
        {props.employees.map((employee, index) => (
          <ListGroup.Item as="li" key={index}>
            {employee.name.first}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default EmployeeList;
