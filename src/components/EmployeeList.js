import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

const EmployeeList = (props) => {
  //   console.log(props.employees);
  //   props.employees.forEach((item) => console.log(item.name.first));
  //   const listOf;
  return (
    <div>
      <ListGroup as="ul">
        {props.employees.map((employee, index) => (
          <ListGroup.Item as="li" key={index}>
            <div className="row">
              <div className="col-3">
                <img
                  src={employee.picture.thumbnail}
                  alt={`of ${employee.name.first}`}
                />
              </div>
              <div className="col-3">
                <p>
                  {employee.name.first} {employee.name.last}
                </p>
              </div>
              <div className="col-3">
                <p>{employee.cell}</p>
              </div>
              <div className="col-3">
                <p>{employee.email}</p>
              </div>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default EmployeeList;
