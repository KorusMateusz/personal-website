import React, { Component } from 'react';
import axios from "axios";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      messageForm: {
        from: "",
        subject: "",
        message: ""
      },
      recaptchaVerified: false
    };
    this.handleMessageFormChange = this.handleMessageFormChange.bind(this);
    this.handleMessageFormSubmit = this.handleMessageFormSubmit.bind(this);
  }
  handleMessageFormChange = e =>{
    this.setState({
      messageForm: {
        ...this.state.messageForm,
        [e.target.name]: e.target.value}
      }
    )
  };
  async handleMessageFormSubmit(e){
    e.preventDefault();
    await axios.post("/api/form", this.state.messageForm)
  }

  render() {
    return (
      <div className="App">
        <form autoComplete={"off"} onSubmit={this.handleMessageFormSubmit}>
          <input
            type={"text"}
            name={"from"}
            value={this.state.messageForm.from}
            placeholder={"From"}
            onChange={this.handleMessageFormChange}
            />
          <input
            type={"text"}
            name={"subject"}
            value={this.state.messageForm.subject}
            placeholder={"Subject"}
            onChange={this.handleMessageFormChange}
          />
          <input
            type={"text"}
            name={"message"}
            value={this.state.messageForm.message}
            placeholder={"Message"}
            onChange={this.handleMessageFormChange}
          />
          <button type={"submit"} disabled={!this.state.recaptchaVerified}>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
