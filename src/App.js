import "./styles.css"
import { Component } from "react";

class App extends Component {
  state = {
    username: "",
    department: "",
    ratings: "",
    list: [],
    headingVisiblity: true,
    isFormVisible: true,
    isGoBackVisible: false,
    isDataVisible: false,
  };

  updateEntry(key, value) {
    this.setState({ [key]: value });
  }

  
  addingData() {
    const list = [...this.state.list];
    
    const newentry = {
      id: 1 + Math.random(),
      username: this.state.username,
      department: this.state.department,
      ratings: this.state.ratings,
    };

    list.push(newentry);

    this.setState({
      username: "",
      department: "",
      ratings: "",
      list,
      headingVisiblity: false,
      isFormVisible: false,
      isGoBackVisible: true,
      isDataVisible: true,
    });
  }

  // submitEntry() {
  //   this.addingData();
  // }

  goBack() {
    this.setState({
      headingVisiblity: true,
      isFormVisible: true,
      isGoBackVisible: false,
      isDataVisible: false,
    });
  }

  render() {
    const btnDisable =  this.state.ratings.length === 0 ||
    this.state.department.length === 0 ||
    this.state.username.length === 0
    return (
      <div className="App">
        <h1>
          Employee Feedback {this.state.headingVisiblity ? "Form" : "Data"}{" "}
        </h1>
        <div className="form" style = {{ display : this.state.isFormVisible ? "block" : "none"}}>
          <label>
            Name:
            <input
              className="input namebox"
              type="text"
              value={this.state.username}
              placeholder="Enter name"
              onChange={(e) => this.updateEntry("username", e.target.value)}
            />
          </label>
          <br />
          <label>
            Department:
            <input
              className="input departmentBox"
              type="text"
              value={this.state.department}
              placeholder="Enter department"
              onChange={(e) => this.updateEntry("department", e.target.value)}
            />
          </label>
          <br />
          <label>
            Ratings:
            <input
              className="input ratingBox"
              type="number"
              value={this.state.ratings}
              placeholder="Enter Ratings"
              onChange={(e) => this.updateEntry("ratings", e.target.value)}
            />
          </label>

          <br />
          <button className="btn" disabled={btnDisable} onClick={(e) => this.addingData()}>
            submit
          </button>
        </div>

        <ul
          className="userData"
          style={{
            visibility: this.state.isFormVisible ? "hidden" : "visible",
          }}
        >
          {this.state.list.map((item) => {
            return (
              <li key="item.id">
                Name : {item.username} | Department : {item.department} |
                Ratings : {item.ratings}
              </li>
            );
          })}
        </ul>

        <button
          className="btn"
          style={{ display: this.state.isGoBackVisible ? "block" : "none" }}
          onClick={() => this.goBack()}
        >
          Go Back
        </button>
      </div>
    );
  }
}

export default App;
