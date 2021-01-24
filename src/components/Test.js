import React from "react";
import Nav from "react-bootstrap/Nav";

function Test({ sort }) {
  // console.log(sort);
  return (
    <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link eventKey="link-1" onClick={sort}>
          Name
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Email</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-3">Phone Number</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
export default Test;
