import { Component } from "react";
import API from "../utils/api";
import Table from "../components/Table";
import Container from "../components/Container";
import Col from "../components/Col";
import Row from "../components/Row";
import Search from "../components/Search";

class Page extends Component {
  state = {
    search: "",
    results: [],
  };

  componentDidMount() {
    this.getEmployees();
  }

  handleInputChange = (event) => {
    this.setState({ ...this.state, search: event.target.value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(event);
  };

  getEmployees = () => {
    API.getRandomEmployees()
      .then((res) => {
        this.setState({
          results: res.data.results,
        });
      })
      .catch((err) => console.log(err));
  };

  render = () => {
    return (
      <div>
        {/* Title */}
        <Search
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        >
          <Container>
            <Row>
              <Col>
                <Table employees={this.state.results} />
              </Col>
            </Row>
          </Container>
        </Search>
      </div>
    );
  };
}

export default Page;
