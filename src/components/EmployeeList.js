import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

const EmployeeList = (props) => {
  return (
    <div>
      <ListGroup as="ul">
        {props.employees.map((employee, index) => (
          <ListGroup.Item as="li" key={index}>
            <div className="row">
              <div className="col-6">
                <div className="row">
                  <div className="col-lg-6">
                    <img
                      src={employee.picture.thumbnail}
                      alt={`of ${employee.name.first}`}
                    />
                  </div>
                  <div className="col-lg-6">
                    <p>
                      {employee.name.first} {employee.name.last}
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-6">
                <div className="row">
                  <div className="col-lg-6">
                    <p>{employee.cell}</p>
                  </div>
                  <div className="col-lg-6">
                    <p>{employee.email}</p>
                  </div>
                </div>
              </div>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default EmployeeList;
