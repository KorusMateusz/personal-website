import React, { Component } from 'react';
import ContactForm from "../ContactForm";
import Recaptcha from "react-recaptcha";
import axios from "axios";


class Contact extends Component {
  constructor(){
    super();
    this.state = {
      contactFormFields: {
        from: "",
        subject: "",
        message: ""
      },
      recaptchaVerified: false
    };
    this.handleContactFormChange = this.handleContactFormChange.bind(this);
    this.handleContactFormSubmit = this.handleContactFormSubmit.bind(this);
    this.verifyRecaptcha = this.verifyRecaptcha.bind(this);
  }
  handleContactFormChange = e =>{
    this.setState({
        contactFormFields: {
          ...this.state.contactFormFields,
          [e.target.name]: e.target.value}
      }
    )
  };
  async handleContactFormSubmit(e){
    await axios.post("/api/form", this.state.contactFormFields)
  }
  verifyRecaptcha(response) {
    if (response) {
      this.setState({
        recaptchaVerified: true
      })
    }
  }

  render() {
    return(
      <div><h1>Contact Me</h1>
        <ContactForm
          contactFormFields={this.state.contactFormFields}
          handleContactFormChange={this.handleContactFormChange}
          handleContactFormSubmit={this.handleContactFormSubmit}
          verifyRecaptcha={this.verifyRecaptcha}
          recaptchaVerified={this.state.recaptchaVerified}/>
      </div>
    )
  }
}

export default Contact;