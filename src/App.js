import React, { Component } from "react";
import { connect } from "react-redux";
import Form from "./components/Form";

class App extends Component {
  render() {
    return <Form />;
  }
}

const mapStateToProps = (state, ownProps) => {};

const mapDispatchToProps = dispatch => {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
