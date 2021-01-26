import React from "react";
import Nav from "react-bootstrap/Nav";

function EmployeeNav({ sort }) {
  // console.log(sort);
  return (
    <Nav variant="tabs" defaultActiveKey="/home">
      <div style={{ width: "100%" }} className="row">
        <div className="col-3">
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              Sort by:
            </Nav.Link>
          </Nav.Item>
        </div>
        <div className="col-3">
          <Nav.Item>
            <Nav.Link eventKey="link-1" onClick={sort} id="name">
              Name
            </Nav.Link>
          </Nav.Item>
        </div>
        <div className="col-3">
          <Nav.Item>
            <Nav.Link eventKey="link-3" onClick={sort} id="phone">
              Phone Number
            </Nav.Link>
          </Nav.Item>
        </div>
        <div className="col-3">
          <Nav.Item>
            <Nav.Link eventKey="link-2" onClick={sort} id="email">
              Email
            </Nav.Link>
          </Nav.Item>
        </div>
      </div>
    </Nav>
  );
}
export default EmployeeNav;
