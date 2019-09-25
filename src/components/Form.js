import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actions";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import List from '../components/List';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    };
  }
  // handler za promenu u inputu
  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  // poziva akciju createEntry koja pokrece case
  // u reduceru CREATE_ENTRY koji pravi novi unos
  handleSubmit = e => {
    e.preventDefault();

    let entry = {
      text: this.state.text
    };
    /////////////////////////////////////
    this.props.createEntry(entry);
    ////////////////////////////////////
    this.setState({
      text: ""
    });
  };

  // poziva akciju deleteEntry koja poziva case
  // u reduceru DELETE_ENTRY

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
            onChange={e => this.handleChange(e)}
            floatingLabelFixed
          />
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
  return {
  };
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
