import React, { Component } from "react";
import EmployeeList from "./EmployeeList";
import API from "../utils/API";

import Test from "./Test";

class EmployeeDirectory extends Component {
  state = {
    result: {},
    sortedBy: "",
  };
  componentDidMount() {
    this.getEmployees();
  }

  getEmployees = () => {
    API.search()
      .then((res) => this.setState({ result: res.data.results }))
      .catch((err) => console.log(err));
  };

  sortByName = () => {
    if (this.state.sortedBy === "name_a-z") {
      const sortedEmployees = this.state.result.sort((a, b) =>
        a.name.first.toLowerCase() < b.name.first.toLowerCase() ? 1 : -1
      );
      this.setState({ result: sortedEmployees, sortedBy: "name_z-a" });
    } else {
      const sortedEmployees = this.state.result.sort((a, b) =>
        a.name.first.toLowerCase() > b.name.first.toLowerCase() ? 1 : -1
      );
      this.setState({ result: sortedEmployees, sortedBy: "name_a-z" });
    }

    console.log(this.state.sortedBy);
  };

  render() {
    return (
      <div>
        <Test sort={this.sortByName} />
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
