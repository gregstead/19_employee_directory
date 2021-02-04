import { Component } from "react";
import API from "../utils/api";
import Table from "../components/Table"

class Page extends Component {
  state = {
    employees: [],
  };

  componentDidMount() {
    this.getEmployees();
  }

  getEmployees = () => {
    API.getRandomEmployees()
      .then((res) => {
        this.setState({
          employees: res.data.results,
        });
      })
      .catch((err) => console.log(err));
  };

  render = () => {
    return (
      <div>
        {/* Title */}
        {/* Container */}
        {/* Row */}
        {/* Column */}
        <Table employees={this.state.employees}/>
      </div>
    );
  };
}

export default Page;
