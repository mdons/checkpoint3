import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Twitter from "twitter";
import config from "./config.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.twitter = new Twitter(config);
  }

  getData = () => {
    let params = {
      q: "akshay",
      count: 100
    };
    this.twitter.get("search/tweets", params, (err, data, response) => {
      console.log(data);
    });
  };

  componentDidMount = () => {
    this.getData();
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
