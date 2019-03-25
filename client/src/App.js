import React, { Component } from 'react';
import './App.css';
import Router from "./components/routes/Router"
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';
import NavBar from "./components/NavBar.js"

const theme = createMuiTheme({
  palette: {
    primary: blueGrey,
    type: 'dark',
  },
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <NavBar className={"header"}/>
          <Router/>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
