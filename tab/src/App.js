import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: "this is a thick ass test until i have an api to fill this data",
      data2: "this is another test",
    };
  }

  // componentDidMount() {
  //   const url =
  //     "https://api.nasa.gov/planetary/earth/assets?lon=100.75&lat=1.5&date=2014-02-01&dim=0.15&api_key=ssHzMNLbArzSsguZXxRv5yXl9v5Vg9cRcOyqoacP";
  //   fetch(url)
  //     .then((unparsedData) => unparsedData.json())
  //     .then((parsedData) => {
  //       console.log(parsedData);
  //     });
  // }

  changeContent = () => {
    this.setState( { data: this.state.data2 })
  }

  render() {
    return (
      <div className="main">
        <header>
          <h2 className="title">lorme ipsum</h2>
        </header>

        <div className="container">
          <div className="row">
            <button onClick={this.changeContent} >lorem ipsum</button>
            <button>lorem ipsum</button>
            <button>lorem ipsum</button>
            <button>lorem ipsum</button>
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
