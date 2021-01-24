import React, { Component } from "react";
import EmployeeList from "./EmployeeList";
import API from "../utils/API";

class EmployeeDirectory extends Component {
  state = {
    result: {},
  };
  componentDidMount() {
    this.getEmployees();
  }

  //   getEmployees = () => {
  //     API.search()
  //       .then((res) => this.setState({ result: res }))
  //       .catch((err) => console.log(err));
  //   };

  getEmployees = () => {
    API.search()
      .then((res) => this.setState({ result: res.data.results }))
      .catch((err) => console.log(err));
  };

  sortByName = () => {
    const sortedEmployees = this.state.result.sort((person) => person.name);
    return sortedEmployees;
  };

  render() {
    return (
      <div>
        {this.state.result.length > 0 ? (
          <EmployeeList
            employees={this.state.result}
            getEmployees={this.getEmployees}
          />
        ) : (
          <h2>No Results</h2>
        )}
      </div>
    );
  }
}

export default EmployeeDirectory;
