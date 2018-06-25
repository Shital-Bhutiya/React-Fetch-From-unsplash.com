import React, { Component } from "react";

class ListPhotos extends Component {
  render() {
    return (
      <ul>
        {this.props.images.map(results => {
          return (
            <li key={results.id}>
              <img src={results.urls.small} alt={results.id}/>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListPhotos;
