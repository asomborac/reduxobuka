import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actions";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import List from "../components/List";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      year: ""
    };
  }

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    let entry = {
      text: this.state.text,
      year: this.state.year
    };

    this.props.createEntry(entry);

    this.setState({
      text: ""
    });
    this.setState({
      year: ""
    });
  };

  handleReset = e => {
    this.props.resetEntries();
  };

  render() {
    return (
      <MuiThemeProvider>
        <div className="pads">
          <TextField
            name="text"
            hintText="Input text here"
            floatingLabelText="Text entry"
            value={this.state.text}
            onChange={this.handleChange}
            floatingLabelFixed
          />
          <br />
          <TextField
            name="year"
            hintText="Input year here"
            floatingLabelText="Year entry"
            value={this.state.year}
            onChange={this.handleChange}
            floatingLabelFixed
          />
          <br />
          <RaisedButton
            label="Submit"
            onClick={e => this.handleSubmit(e)}
            primary
            className="batan"
          />
          <RaisedButton
            label="Reset"
            onClick={e => this.handleReset(e)}
            primary
            className="batan"
          />
        </div>
        <List />
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    createEntry: entry => dispatch(actions.createEntry(entry)),
    resetEntries: e => dispatch(actions.resetEntries(e))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
