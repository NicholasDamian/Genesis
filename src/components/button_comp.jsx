import React, { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "", contacts: null };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentDidMount() {
  //   fetch("http://jsonplaceholder.typicode.com/users")
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({ contacts: data });
  //     })
  //     .catch(console.log);
  // }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    // componentDidMount();
    // , { credentials: "include" }
    fetch("http://localhost:8080/demo/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: "name=value1&email=value2"
    })
      .then(function() {
        console.log("ok");
      })
      .catch(function() {
        console.log("error");
      });

    event.preventDefault();
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>

        {/* //* <button onClick={() => alert(document.getElementById("textinput"))}> */}
        {/* </button> */}
      </React.Fragment>
    );
  }
}

export default Button;
