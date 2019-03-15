import React, { Component } from 'react';
import axios from "axios";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      emailFromField: "",
      emailSubjectField: "",
      emailMessageField: "",
      recaptchaVerified: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = e =>{
    this.setState({ [e.target.name]: e.target.value} )
  };
  async handleSubmit(e){
    e.preventDefault();
    const { emailFromField, emailSubjectField, emailMessageField } = this.state
    const form = await axios.post("/api/form", {
      emailFromField,
      emailSubjectField,
      emailMessageField
    })
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input
            type={"text"}
            name={"emailFromField"}
            value={this.state.emailFromField}
            placeholder={"From"}
            onChange={this.handleChange}
            />
          <input
            type={"text"}
            name={"emailSubjectField"}
            value={this.state.emailSubjectField}
            placeholder={"Subject"}
            onChange={this.handleChange}
          />
          <input
            type={"text"}
            name={"emailMessageField"}
            value={this.state.emailMessageField}
            placeholder={"Message"}
            onChange={this.handleChange}
          />
          <button type={"submit"}>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
