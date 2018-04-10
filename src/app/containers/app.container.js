import React, { Component } from "react";
import { Helmet } from "react-helmet";

class AppContainer extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Helmet>
          <title>Test Title</title>
        </Helmet>
        <img src="assets/sample.jpg" />
        This is a test
      </div>
    );
  }
}
export default AppContainer;
