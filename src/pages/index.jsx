import { Component } from "react";
import API from "../utils/api";
import Table from "../components/Table";
import Container from "../components/Container";
import Col from "../components/Col";
import Row from "../components/Row";

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
        <Container >
        <Row>
          <Col>
          <Table employees={this.state.employees}/>
          </Col>
        </Row>

        </Container>
       
      </div>
    );
  };
}

export default Page;
