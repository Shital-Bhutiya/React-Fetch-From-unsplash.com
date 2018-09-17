import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
class Form extends Component {
  render() {
    return (
      <form className="App">
        <img src={this.props.randomPhoto} alt="randomPhotto" />
        <p>{this.props.error}</p>

        <label>
          Text:
          <Input
            name="query"
            type="text"
            onChange={this.props.handleInput}
            value={this.props.query}
          />
        </label>

        <label>
          Number Of Photos:
          <Select
            name="number"
            onChange={this.props.handleInput}
            value={this.props.number}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </Select>
        </label>

        <label>
          Orientation:
          <Select
            name="orientation"
            onChange={this.props.handleInput}
            value={this.props.orientation}
          >
            <option value="landscape">landscape</option>
            <option value="portrait">portrait</option>
            <option value="squarish">squarish</option>
            <option value="all">all</option>
          </Select>
        </label>
        <Button variant="contained" color="secondary" onClick={this.props.searchPhotos}>Search</Button>
      </form>
    );
  }
}

export default Form;
