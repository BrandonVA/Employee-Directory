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
    filterBy: "All",
    screenWidth: window.innerWidth,
  };

  handleResize = (e) => {
    this.setState({ screenWidth: window.innerWidth });
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    this.getEmployees();
  }

  componentWillUnmount() {
    window.addEventListener("resize", this.handleResize);
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
  handleChange = (e) => {
    const filterByValue = e.target.textContent;
    this.setState({ filterBy: filterByValue });
  };

  resetEmployees = () => {
    this.setState({ result: this.state.cachedResult });
  };

  sortBy_id = (event) => {
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
  };

  filterEmployees = (e) => {
    const selectVal = this.state.filterBy.toLowerCase();
    const inputVal = e.target.value;
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

    this.setState({ result: newArray });
  };

  render() {
    return (
      <div>
        <Navigation
          filter={this.filterEmployees}
          handleChange={this.handleChange}
          resetEmployees={this.resetEmployees}
          filteredBy={this.state.filterBy}
        />
        <main className="container">
          <EmployeeNav
            screenWidth={this.state.screenWidth}
            sort={this.sortBy_id}
          />
          {this.state.result.length > 0 ? (
            <EmployeeList
              employees={this.state.result}
              getEmployees={this.getEmployees}
            />
          ) : (
            <h2>No Results</h2>
          )}
        </main>
      </div>
    );
  }
}

export default EmployeeDirectory;
