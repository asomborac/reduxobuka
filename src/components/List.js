import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actions";
import RaisedButton from "material-ui/RaisedButton";

class List extends Component {
    
  handleDelete = (e, index) => {
    e.preventDefault();
    this.props.deleteEntry(index);
  };

  listView(data, index) {
    return (
      <div className="row">
        <li key={index} className="mylist">
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
    return (
      <div>
        {
          <ul className="list-group">
            {this.props.entries.map((entry, i) => this.listView(entry, i))}
          </ul>
        }
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    entries: state.entries
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteEntry: index => dispatch(actions.deleteEntry(index))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
