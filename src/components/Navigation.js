import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";

const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#">Employee Directory</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Form inline className="ml-auto">
          <Form.Group controlId="filterBy">
            <Form.Label className="mr-1">Filter By:</Form.Label>
            <Form.Control as="select" custom>
              <option value="all">All</option>
              <option value="name">Name</option>
              <option value="phone">Phone</option>
              <option value="email">Email</option>
            </Form.Control>
          </Form.Group>
          <FormControl
            id="filterForInput"
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            onChange={() => {
              var selectVal = document.getElementById("filterBy").value;
              var inputVal = document.getElementById("filterForInput").value;
              //   const test = formData.getAll();
              console.log(selectVal);
              console.log(inputVal);
            }}
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
