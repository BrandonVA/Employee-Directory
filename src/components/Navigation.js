import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

const Navigation = ({ filter, handleChange, resetEmployees, filteredBy }) => {
  function DropdownItem() {
    const dropdownItems = ["Name", "Phone", "Email", "All"];
    return dropdownItems
      .filter((item) => item !== filteredBy)
      .map((item, index) => (
        <Dropdown.Item key={index} onClick={handleChange}>
          {item}
        </Dropdown.Item>
      ));
  }
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#">Employee Directory</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <div
          className="ml-auto mt-2"
          style={{ maxWidth: "600px", width: "100%" }}
        >
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>Filter By:</InputGroup.Text>
            </InputGroup.Prepend>
            <DropdownButton
              as={InputGroup.Prepend}
              variant="outline-secondary"
              title={`${filteredBy} `}
              id="filterBy"
              value={filteredBy}
              onChange={handleChange}
            >
              {DropdownItem()}
            </DropdownButton>
            <FormControl
              aria-describedby="filter Employees"
              id="filterForInput"
              onChange={filter}
            />
            <InputGroup.Append>
              <Button variant="outline-secondary" onClick={resetEmployees}>
                Reset
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
