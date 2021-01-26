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
    cachedResult: "",
  };
  componentDidMount() {
    this.getEmployees();
  }

  getEmployees = () => {
    API.search()
      .then((res) =>
        this.setState({
          result: res.data.results,
          cachedResult: res.data.results,
        })
      )
      .catch((err) => console.log(err));
  };

  sortBy_id = (event) => {
    // console.log(event.target.id);
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
    // console.log(this.state.sortedBy);
  };

  filterEmployees = () => {
    const selectVal = document.getElementById("filterBy").value;
    const inputVal = document.getElementById("filterForInput").value;
    const newArray = this.state.cachedResult.filter((item) => {
      let fullName = `${item.name.first.toLowerCase()} ${item.name.last.toLowerCase()}`;
      let name_test = fullName.includes(inputVal.toLowerCase());
      let email_test = item.email.includes(inputVal.toLowerCase());
      let cell_test = item.cell.includes(inputVal);
      switch (selectVal) {
        case "name":
          return name_test;
        case "email":
          return email_test;
        case "phone":
          return cell_test;
        default:
          return name_test || email_test || cell_test;
      }
    });

    this.setState({
      result: newArray,
    });

    // console.log(selectVal);
    // console.log(inputVal);
    // console.log(newArray);
  };

  render() {
    return (
      <div>
        <Navigation filter={this.filterEmployees} />
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
