import React, { Component } from "react";
import Images from "./components/image_comp";
import FormField from "./components/form_field_comp";
import Button from "./components/button_comp";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Images pagename={this.props.propname} />
        <FormField pagename={this.props.propname} />
        <Button pagename={this.props.propname} />
      </React.Fragment>
    );
  }
}

export default App;
