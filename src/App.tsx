import React, { Component } from "react";
import "./App.css";
import Loader from "./components/Loader";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Loader />
      </div>
    );
  }
}

export default App;
