import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actions";
import RaisedButton from "material-ui/RaisedButton";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { styled } from "@material-ui/styles";
import { Grid, TableBody, Paper } from "@material-ui/core";
import { width, border, borderRadius } from "@material-ui/system";

const MyButton = styled(RaisedButton)({
  margin: "1px 1px",
  borderRadius: "0px"
});
const HeaderPaper = styled(Paper)({
  height: "70px",
  width: "17%",
  textAlign: "center",
  borderRadius: "0px",
  verticalAlign: "middle"
});
const IdHeaderPaper = styled(Paper)({
  height: "70px",
  width: "5%",
  textAlign: "center",
  borderRadius: "0px"
});
const MyPaper = styled(Paper)({
  // height: "40px",
  width: "17%",
  textAlign: "center",
  borderRadius: "0px",
  alignItems: "center"
});

const IdPaper = styled(Paper)({
  // height: "40px",
  width: "5%",
  textAlign: "center",
  borderRadius: "0px"
});

/////////////// List.js /////////////////
class List extends Component {
  handleDelete = (e, index) => {
    e.preventDefault();
    this.props.deleteEntry(index);
  };

  tableBody(data, index) {
    return (
      <Grid container spacing={0} justify="space-evenly">
        <IdPaper>
          <p>{index + 1}</p>
        </IdPaper>

        <MyPaper>
          <p>{data.name}</p>
        </MyPaper>

        <MyPaper>
          <p>{data.text}</p>
        </MyPaper>

        <MyPaper>
          <p>{data.region}</p>
        </MyPaper>

        <MyPaper>
          <p>{data.year}</p>
        </MyPaper>

        <MyPaper>
          <p>{data.price}</p>
        </MyPaper>
        <IdPaper>
          <p>
            <MyButton
              // className="batan"
              label="Delete"
              primary
              onClick={e => this.handleDelete(e, index)}
            ></MyButton>
          </p>
        </IdPaper>
      </Grid>
    );
  }

  render() {
    return (
      <div>
        <Grid container spacing={0} justify="space-evenly">
          <IdHeaderPaper>
            <h3>Id</h3>
          </IdHeaderPaper>
          <HeaderPaper>
            <h3>Name</h3>
          </HeaderPaper>
          <HeaderPaper>
            <h3>Type</h3>
          </HeaderPaper>
          <HeaderPaper>
            <h3>Region</h3>
          </HeaderPaper>
          <HeaderPaper>
            <h3>Year</h3>
          </HeaderPaper>
          <HeaderPaper>
            <h3>Price</h3>
          </HeaderPaper>
          <IdHeaderPaper>
            <h3>Delete</h3>
          </IdHeaderPaper>
        </Grid>

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
