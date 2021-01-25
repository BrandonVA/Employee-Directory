import React, { Component } from "react";
import EmployeeList from "./EmployeeList";
import API from "../utils/API";
import Navigation from "./Navigation";
import EmployeeNav from "./EmployeeNav";
import sortEmployees from "./scripts/sortEmployees";

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

  sortBy_id = (event) => {
    console.log(event.target.id);
    sortEmployees(
      this.state.sortedBy,
      event.target.id,
      this.state.result,
      (array, order) => {
        this.setState({
          result: array,
          sortedBy: `${event.target.id}${order}`,
        });
      }
    );
    console.log(this.state.sortedBy);
  };

  render() {
    return (
      <div>
        <Navigation />
        <EmployeeNav sort={this.sortBy_id} />
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
