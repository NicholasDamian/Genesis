import React, { Component } from "react";

class Images extends Component {
  state = {};

  render() {
    return (
      <div>
        <img src={require("../tree.png")} />
      </div>
    );
  }
}

export default Images;
