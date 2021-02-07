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
    filteredCache: [],
    results: [],
  };

  // API call for employee generator
  componentDidMount() {
    this.getEmployees();
  }

  handleInputChange = (event) => {
    this.setState({
      ...this.state,
      search: event.target.value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const filteredEmployees = this.state.results.filter((employee) => {
      const firstName = employee.name.first.toLowerCase();
      const lastName = employee.name.first.toLowerCase();
      return (
        firstName.includes(this.state.search.toLowerCase()) ||
        lastName.includes(this.state.search.toLowerCase())
      );
    });
    this.setState({
      ...this.state,
      filteredCache: filteredEmployees,
    });
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
                <Table
                  employees={
                    this.state.filteredCache.length > 0
                      ? this.state.filteredCache
                      : this.state.results
                  }
                />
              </Col>
            </Row>
          </Container>
        </Search>
      </div>
    );
  };
}

export default Page;
