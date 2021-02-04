import { Component } from "react";
import API from "../utils/api";

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
        {/* Table */}
        <table className="table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {this.state.employees.map((employee) => (
              <tr key={employee.email}>
                <th scope="row"><img src={employee.picture.thumbnail}/></th>
                <td>{employee.name.first}</td>
                <td>{employee.name.last}</td>
                <td>{employee.email}</td>
              </tr>
            ))}
            {/* <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr> */}
          </tbody>
        </table>
      </div>
    );
  };
}

export default Page;
