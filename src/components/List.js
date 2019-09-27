import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actions";
import RaisedButton from "material-ui/RaisedButton";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { styled } from "@material-ui/styles";

const NewCell1 = styled(TableCell)({
  width: "40px"
});

const NewCell2 = styled(TableCell)({
  width: "120px"
});

const NewCell3 = styled(TableCell)({
  width: "200px",
  align: "center"
});

class List extends Component {
  handleDelete = (e, index) => {
    e.preventDefault();
    this.props.deleteEntry(index);
  };

  tableBody(data, index) {
    return (
      <TableRow key={index} className="ab">
        <NewCell1>{index + 1}</NewCell1>
        <NewCell3>{data.name}</NewCell3>
        <NewCell3>{data.text}</NewCell3>
        <NewCell3>{data.region}</NewCell3>
        <NewCell3>{data.year}</NewCell3>
        <NewCell3>{data.price}</NewCell3>
        <NewCell2>
          <RaisedButton
            className="batan"
            label="Delete"
            onClick={e => this.handleDelete(e, index)}
            primary
          />
        </NewCell2>
      </TableRow>
    );
  }

  render() {
    return (
      <div>
        <Table>
          <TableHead>
            <NewCell1>Id</NewCell1>
            <NewCell3>Name</NewCell3>
            <NewCell3>Type</NewCell3>
            <NewCell3>Region</NewCell3>
            <NewCell3>Year</NewCell3>
            <NewCell3>Price</NewCell3>
            <NewCell2>        Delete</NewCell2>
          </TableHead>
        </Table>

        {this.props.entries.map((entry, i) => this.tableBody(entry, i))}
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
