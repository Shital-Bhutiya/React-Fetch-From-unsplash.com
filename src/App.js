import React, {
  Component
} from "react";
import "./App.css";
import Form from "./Form";
import ListPhotos from "./ListPhotos";
class App extends Component {
  state = {
    query: "",
    number: 10,
    orientation: "all",
    images: [],
    randomPhoto: "",
    error: ''
  };

  componentDidMount() {
    fetch(`https://api.unsplash.com/photos/random?h=200&w=200`, {
        headers: {
          Authorization: "Client-ID bae9fc94db46b26d116996902a9640e75ead7f8247411570e90fef85f34a485d"
        }
      })
      .then(data => data.json())
      .then(json => {
        this.setState({
          randomPhoto: json.urls.custom
        });
      });
  }

  searchPhotos = e => {
    e.preventDefault();
    let newPhotos = [],
      url;
    this.setState({
      photos: []
    });
    if (this.state.orientation === "all")
      url = `https://api.unsplash.com/search/photos?query=${this.state.query}&per_page=${this.state.number}&page=1`;
    else
      url = `https://api.unsplash.com/search/photos?query=${this.state.query}&per_page=${this.state.number}&orientation=${this.state.orientation}&page=1`;

    if (this.state.query) {
      fetch(url, {
          headers: {
            Authorization: "Client-ID bae9fc94db46b26d116996902a9640e75ead7f8247411570e90fef85f34a485d"
          }
        })
        .then(data => data.json())
        .then(json => {
          json.results.forEach(element => {
            newPhotos.push(element);
          });
          this.setState({
            images: newPhotos,
            query: "",
            number: "10",
            orientation: "all",
            error: ''
          });
        });
    } else {
      this.setState({
        error: 'Please enter text'
      })
    }
  };

  handleInput = e => {
    if (e.target.name === "query" && e.target.value !== "")
      this.setState({
        [e.target.name]: e.target.value
      });
    else
      this.setState({
        [e.target.name]: e.target.value
      });
  };

  render() {
    return ( <div className = "App" >
      <Form randomPhoto = {
        this.state.randomPhoto
      }
      query = {
        this.state.query
      }
      number = {
        this.state.number
      }
      orientation = {
        this.state.orientation
      }
      handleInput = {
        this.handleInput
      }
      searchPhotos = {
        this.searchPhotos
      }
      error = {
        this.state.error
      }/> 
      <ListPhotos images = {
        this.state.images
      }
      /> 
      </div>
    );
  }
}

export default App;