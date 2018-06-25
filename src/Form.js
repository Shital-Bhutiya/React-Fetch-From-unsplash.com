import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <form className="App">
        <img src={this.props.randomPhoto} alt="randomPhotto" />
        <p>{this.props.error}</p>

        <label>
          Text:
          <input
            name="query"
            type="text"
            onChange={this.props.handleInput}
            value={this.props.query}
          />
        </label>

        <label>
          Number Of Photos:
          <select
            name="number"
            onChange={this.props.handleInput}
            value={this.props.number}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
        </label>

        <label>
          Orientation:
          <select
            name="orientation"
            onChange={this.props.handleInput}
            value={this.props.orientation}
          >
            <option value="landscape">landscape</option>
            <option value="portrait">portrait</option>
            <option value="squarish">squarish</option>
            <option value="all">all</option>
          </select>
        </label>
        <button onClick={this.props.searchPhotos}>Search</button>
      </form>
    );
  }
}

export default Form;
