import { Component } from "react";
import API from "../utils/api"

class Page extends Component {
    state = {
        image: "",
        match: false
    };
    
    componentDidMount() {
        this.getEmployees();
    }

    getEmployees = () => {
        API.getRandomEmployees().then(res => {
            const employees = res.data.results;
            console.log('employees :>> ', employees);
        })
    }

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
      <th scope="col">#</th>
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
            </div>
          ); 
    }
}

export default Page;