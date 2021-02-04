import { Component } from "react";
import API from "../utils/api";
import Table from "../components/Table";
import Container from "../components/Container";
import Col from "../components/Col";
import Row from "../components/Row";

class Page extends Component {
  state = {
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
    const newResults = this.state.results;
    const sorter = event.target.innerText;
    this.setState({
      sortBy: sorter,
      results: newResults.sort((a,b) => {
        if (a.name.first > b.name.first) {
          return 1
        } else if (a.name.first < b.name.first) {
          return -1
        }
        return 0;
      })
    })
    console.log('this.state :>> ', this.state);
  };

  getEmployees = () => {
    API.getRandomEmployees()
      .then((res) => {
        this.setState({
          search: "",
          sortBy: "",
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
                sortBy={this.sortBy}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  };
}

export default Page;
