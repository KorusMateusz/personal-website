import React, { Component } from 'react';
import axios from "axios";
import Recaptcha from "react-recaptcha";
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
    this.verifyRecaptcha = this.verifyRecaptcha.bind(this);
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
    await axios.post("/api/form", this.state.messageForm)
  }
  verifyRecaptcha(response) {
    if (response) {
      this.setState({
        recaptchaVerified: true
      })
    }
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
          <Recaptcha
            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            render="explicit"
            onloadCallback={console.log("ReCaptcha loaded")}
            verifyCallback={this.verifyRecaptcha}
          />
          <button type={"submit"} disabled={!this.state.recaptchaVerified}>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
