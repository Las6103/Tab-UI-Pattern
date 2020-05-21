import React, { Component } from "react";
import "./App.css";

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
        console.log(parsedData[0].name);
        breweries = parsedData;
        console.log(breweries[0].name);
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
          <div className="row">
            <div className="col">
              <button className="buttons active" onClick={this.greeneGrowlers}>
                lorem ipsum
              </button>
            </div>
            <div className="col">
              <button className="buttons" onClick={this.brawlingBear}>
                lorem ipsum
              </button>
            </div>
            <div className="col">
              <button className="buttons" onClick={this.elderPineBrewing}>
                lorem ipsum
              </button>
            </div>
            <div className="col">
              <button className="buttons" onClick={this.waredacaBrewing}>
                lorem ipsum
              </button>
            </div>
          </div>

          <div className="content">
            <p>{this.state.data}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
