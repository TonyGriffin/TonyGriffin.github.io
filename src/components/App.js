import React from "react";
import Thumbs from "./Thumbs";
import Info from "./Info";
import Search from "./Search";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      search: "London",
      images: [],
      mainImage: "",
      creditsName: "",
      creditsPortfolio: ""
    };

    this.receiveQuery = this.receiveQuery.bind(this);
    this.apiCall = this.apiCall.bind(this);
    this.receiveImage = this.receiveImage.bind(this);
  }

  componentDidMount() {
    let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${
      this.state.search
    }&apiKey=ba952ac5bba8a3501d9f27b84a1e7ed6`;

    fetch(weatherUrl)
      .then(response => response.json())
      .then(content => content.weather[0].description)
      .then(weather => {
        let unsplashUrl = `https://api.unsplash.com/search/photos?page=1&query=${weather}&client_id=b86a7bedd1b8ec0a69b8569aa17c9b1fa7c8377200e6c71c99d09e92da2c1a0d`;
        return fetch(unsplashUrl);
      })
      .then(response => response.json())
      .then(content => {
        console.log(content);
        this.setState({
          images: content.results,
          mainImage: content.results[0].urls.regular,
          creditsName: content.results[0].user.name,
          creditsPortfolioHTML: content.results[0].user.links.html
        });
      });
  }

  apiCall() {
    let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${
      this.state.search
    }&apiKey=ba952ac5bba8a3501d9f27b84a1e7ed6`;

    fetch(weatherUrl)
      .then(response => response.json())
      .then(content => content.weather[0].description)
      .then(weather => {
        let unsplashUrl = `https://api.unsplash.com/search/photos?page=1&query=${weather}&client_id=b86a7bedd1b8ec0a69b8569aa17c9b1fa7c8377200e6c71c99d09e92da2c1a0d`;
        return fetch(unsplashUrl);
      })
      .then(response => response.json())
      .then(content => {
        console.log(content);
        this.setState({
          images: content.results,
          mainImage: content.results[0].urls.regular,
          creditsName: content.results[0].user.name,
          creditsPortfolioHTML: content.results[0].user.links.html
        });
      });
  }

  // passed down as props to Search component
  // receives the new city as input.
  receiveQuery(query) {
    this.setState(
      {
        search: query
      },
      () => this.apiCall()
    );
  }

  // passed down as props to Thumbs component
  // receives the new image from Thumb component.
  receiveImage(image) {
    this.setState({
      mainImage: image
    });
  }

  render() {
    return (
      <main className="content">
        <header className="header">
          <h1 className="title">
            <i>Meteor</i>
            <i>opolis</i>
          </h1>
        </header>

        <figure className="photo" id="photo">
          <img src={this.state.mainImage} />
        </figure>

        <Info
          creditsName={this.state.creditsName}
          creditsPortfolioHTML={this.state.creditsPortfolioHTML}
        />
        <Thumbs images={this.state.images} receiveImage={this.receiveImage} />
        <Search receiveQuery={this.receiveQuery} />
      </main>
    );
  }
}

export default App;
