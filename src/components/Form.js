import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actions";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import List from "../components/List";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { styled } from "@material-ui/styles";

const InputStyle = styled(FormControl)({
  minWidth: 260
});

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      text: "",
      year: "",
      region: "",
      price: ""
    };
  }

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    let entry = {
      name: this.state.name,
      text: this.state.text,
      year: this.state.year,
      region: this.state.region,
      price: this.state.price,
    };

    this.props.createEntry(entry);

    this.setState({ name: "" });
    this.setState({ text: "" });
    this.setState({ year: "" });
    this.setState({ region: "" });
    this.setState({ price: "" });
  }

  handle20 = e => {
    for (let i=0; i<20; i++){
      this.handleSubmitRandom(e);
    }
  }

  handleSubmitRandom = e => {
    e.preventDefault();

    let nameif = this.state.name;
    let textif = this.state.text;
    let yearif = this.state.year;
    let regionif = this.state.region;
    let priceif = this.state.price;

    let wineTypes = [
      "Chardonnay",
      "Riesling",
      "Pinot Grigio",
      "Sauvignon Blanc",
      "Cabernet Sauvignon",
      "Pinot Noir",
      "Syrah",
      "Zinfandel",
      "Malbec",
      "Merlot"
    ];

    let wineRegions = [
      "France",
      "Italy",
      "Spain",
      "United States",
      "Argentina",
      "Australia",
      "Germany",
      "South Africa",
      "Chile",
      "Portugal"
    ];

    if (nameif === "") {
      nameif = "Wine";
    }

    if (textif === "") {
      textif = wineTypes[Math.floor(Math.random() * wineTypes.length)];
    }

    if (yearif === "") {
      yearif = getRandomArbitrary(1960, 2019);
      yearif = Math.round(yearif);
    }

    if (regionif === "") {
      regionif = wineRegions[Math.floor(Math.random() * wineRegions.length)];
    }

    if (priceif === "") {
      priceif = getRandomArbitrary(200, 2000);
      priceif = Math.round(priceif);
    }

    let entry = {
      name: nameif,
      text: textif,
      year: yearif,
      region: regionif,
      price: priceif
    };

    this.props.createEntry(entry);

    this.setState({ name: "" });
    this.setState({ text: "" });
    this.setState({ year: "" });
    this.setState({ region: "" });
    this.setState({ price: "" });
  };

  handleReset = e => {
    this.props.resetEntries();
  };

  render() {
    return (
      <MuiThemeProvider>
        <div className="pads">
          <TextField
            name="name"
            hintText="Input wine name here"
            floatingLabelText="Wine name"
            value={this.state.name}
            onChange={this.handleChange}
            floatingLabelFixed
          />
          <br />

          <InputStyle>
            <InputLabel>Wine type</InputLabel>
            <Select
              helperText="Select a wine"
              value={this.state.text}
              onChange={this.handleChange}
              inputProps={{
                name: "text",
                id: "text-simple"
              }}
            >
              <MenuItem value="none" disabled>
                Select a wine
              </MenuItem>
              <MenuItem value="Chardonnay">Chardonnay</MenuItem>
              <MenuItem value="Riesling">Riesling</MenuItem>
              <MenuItem value="Pinot Grigio">Pinot Grigio</MenuItem>
              <MenuItem value="Sauvignon Blanc">Sauvignon Blanc</MenuItem>
              <MenuItem value="Cabernet Sauvignon">Cabernet Sauvignon</MenuItem>
              <MenuItem value="Pinot Noir">Pinot Noir</MenuItem>
              <MenuItem value="Syrah">Syrah</MenuItem>
              <MenuItem value="Zinfandel">Zinfandel</MenuItem>
              <MenuItem value="Malbec">Malbec</MenuItem>
              <MenuItem value="Merlot">Merlot</MenuItem>
            </Select>
          </InputStyle>

          <br />

          <InputStyle>
            <InputLabel>Wine Region</InputLabel>
            <Select
              helperText="Select a region"
              value={this.state.region}
              onChange={this.handleChange}
              inputProps={{
                name: "region",
                id: "region-simple"
              }}
            >
              <MenuItem value="none" disabled>
                Select a region
              </MenuItem>
              <MenuItem value="France">France</MenuItem>
              <MenuItem value="Italy">Italy</MenuItem>
              <MenuItem value="Spain">Spain</MenuItem>
              <MenuItem value="United States">United States</MenuItem>
              <MenuItem value="Argentina">Argentina</MenuItem>
              <MenuItem value="Australia">Australia</MenuItem>
              <MenuItem value="Germany">Germany</MenuItem>
              <MenuItem value="South Africa">South Africa</MenuItem>
              <MenuItem value="Chile">Chile</MenuItem>
              <MenuItem value="Portugal">Portugal</MenuItem>
            </Select>
          </InputStyle>
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
          <TextField
            name="price"
            hintText="Input wine price here"
            floatingLabelText="Wine price"
            value={this.state.price}
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
          <RaisedButton
            label="Random"
            onClick={e => this.handleSubmitRandom(e)}
            primary
            className="batan"
          />
            <RaisedButton
            label="Random 20"
            onClick={e => this.handle20(e)}
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

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
