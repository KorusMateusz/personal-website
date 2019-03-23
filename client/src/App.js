import React, { Component } from 'react';
import './App.css';
import Router from "./components/routes/Router"
import NavBar from "./components/NavBar.js"

class App extends Component {
  constructor(){
    super();
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <content>
          <div className="page-content" />
          <Router/>
        </content>

      </div>
    );
  }
}

export default App;
