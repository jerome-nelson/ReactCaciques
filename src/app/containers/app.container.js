import React, { Component } from "react";
import SEO from "../components/seo.component";

class AppContainer extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <SEO />
        <img src="assets/sample.jpg" />
        This is a test
      </div>
    );
  }
}
export default AppContainer;
