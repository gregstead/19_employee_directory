import { Component } from "react";
import API from "../../utils/api"

class Table extends Component {
    state = {
        employees: []
    };
    
    componentDidMount() {
        this.getEmployees();
    }

    getEmployees = () => {
        API.getRandomEmployees().then(res => {
            this.state.employees.push(res.data.results); 
            console.log('this.state.employees :>> ', this.state.employees);
        })
    }

    render = () => {
        return (
            <table class="table">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
          ); 
    }
}

export default Table;