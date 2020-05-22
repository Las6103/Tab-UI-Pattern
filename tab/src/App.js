import React, { Component } from "react";
import "./App.css";
import Tabs from "./Tabs";

let breweries = [];

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: "",
    };
  }

  componentDidMount() {
    const url = "https://api.openbrewerydb.org/breweries?by_city=gaithersburg";
    fetch(url)
      .then((unparsedData) => unparsedData.json())
      .then((parsedData) => {
        breweries = parsedData;
        this.setState({
          data: `The ${breweries[0].name} is located on ${breweries[0].street}. 
          Get in contact by calling ${breweries[0].phone}.`,
        });
      });
  }

  greeneGrowlers = (evt) => {
    this.setState({
      data: `The ${breweries[0].name} is located on ${breweries[0].street}. 
      Get in contact by calling ${breweries[0].phone}.`,
    });
    this.active(evt);
  };

  brawlingBear = (evt) => {
    this.setState({
      data: `The ${breweries[1].name} is located on ${breweries[1].street}. 
      Get in contact by calling ${breweries[1].phone}.`,
    });
    this.active(evt);
  };

  elderPineBrewing = (evt) => {
    this.setState({
      data: `The ${breweries[2].name} is located on ${breweries[2].street}. 
      Get in contact by calling ${breweries[2].phone}.`,
    });
    this.active(evt);
  };

  waredacaBrewing = (evt) => {
    this.setState({
      data: `The ${breweries[3].name} is located on ${breweries[3].street}. 
      Get in contact by calling ${breweries[3].phone}.`,
    });
    this.active(evt);
  };

  active = (evt) => {
    let buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
      button.classList.remove("active");
    });
    let isActive = evt.target.classList.add("active");
  };

  render() {
    return (
      <div className="main">
        <header>
          <h1 className="title">lorem ipsum</h1>
        </header>

        <div className="container">
          <Tabs
            greeneGrowlers={this.greeneGrowlers}
            brawlingBear={this.brawlingBear}
            elderPineBrewing={this.elderPineBrewing}
            waredacaBrewing={this.waredacaBrewing}
          />

          <div className="content">
            <p>{this.state.data}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
