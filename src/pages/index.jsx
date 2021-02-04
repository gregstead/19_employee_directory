import { Component } from "react";
import API from "../utils/api";
import Table from "../components/Table";
import Container from "../components/Container";
import Col from "../components/Col";
import Row from "../components/Row";

class Page extends Component {
  state = {
    search: "",
    sortBy: "",
    results: [],
  };

  componentDidMount() {
    this.getEmployees();
  }

  handleInputChange = (event) => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
  };

  handleSortClick = (event) => {
    this.setState({
      sortBy: event.target.innerText,
    });
  };

  getEmployees = () => {
    API.getRandomEmployees()
      .then((res) => {
        this.setState({
          search: "",
          results: res.data.results,
        });
      })
      .catch((err) => console.log(err));
  };

  render = () => {
    return (
      <div>
        {/* Title */}
        {/* Search form */}
        {/* Sort by div */}
        <Container>
          <Row>
            <Col>
              <Table
                employees={this.state.results}
                handleSortClick={this.handleSortClick}
                sortBy={this.state.sortBy}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  };
}

export default Page;
