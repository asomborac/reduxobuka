import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./actions/actions";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class App extends Component {
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
  handleDelete = (e, index) => {
    e.preventDefault();
    this.props.deleteEntry(index);
  };

  handleReset = e => {
    this.props.resetEntries();
  }

  // pravi listu sa podatkom i dugmetom
  listView(data, index) {
    return (
      <div className="row">
        <li key={index}>
          {index}-{data.text}
          <RaisedButton
            className="batan"
            label="Delete"
            onClick={e => this.handleDelete(e, index)}
            primary
          />
        </li>
      </div>
    );
  }

  render() {
    console.log(this.state.text);
    return (
      <MuiThemeProvider>
        <div>
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
            className = "batan"
          />
          <RaisedButton
            label="Reset"
            onClick={e => this.handleReset(e)}
            primary
            className = "batan"
          />

          <div>
            {
              <ul className="list-group">
                {this.props.entries.map((entry, i) => this.listView(entry, i))}
              </ul>
            }
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

// redux state i dispatch funkcije

const mapStateToProps = (state, ownProps) => {
  return {
    entries: state.entries
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createEntry: entry => dispatch(actions.createEntry(entry)),
    deleteEntry: index => dispatch(actions.deleteEntry(index)),
    resetEntries: e => dispatch(actions.resetEntries(e))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
