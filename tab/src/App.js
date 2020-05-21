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
        console.log(breweries[0]);
        this.setState({ data: breweries[0].name });
      });
  }

  greeneGrowlers = (evt) => {
    this.setState({ data: breweries[0].name });
    this.active(evt);
  };

  brawlingBear = (evt) => {
    this.setState({ data: breweries[1].name });
    this.active(evt);
  };

  elderPineBrewing = (evt) => {
    this.setState({ data: breweries[2].name });
    this.active(evt);
  };

  waredacaBrewing = (evt) => {
    this.setState({ data: breweries[3].name });
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
    console.log(this.state.data);
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
