import React, { Component } from 'react';
import ContactForm from "./ContactForm";
import axios from "axios";
import { Redirect } from 'react-router-dom'


class Contact extends Component {
  constructor(){
    super();
    this.state = {
      contactFormFields: {
        from: "",
        subject: "",
        message: ""
      },
      recaptchaVerified: true,
      messageSent: false
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
  handleContactFormSubmit(e){
    e.preventDefault();
    axios.post("/api/form", this.state.contactFormFields)
      .then((res) => {
        if (res.data.error){
          return this.setState({messageSent: "error"})
        }
        return this.setState({messageSent: "success"})
    })
      .catch(() => {
        this.setState({messageSent: "error"})
      });
  }
  verifyRecaptcha(response) {
    if (response) {
      this.setState({
        recaptchaVerified: true
      })
    }
  }

  render() {
    const { contactFormFields, recaptchaVerified, messageSent } = this.state;
    if (messageSent) {
      if (messageSent === "error"){
        return <Redirect to='/messagefailed'/>;
      }
      return <Redirect to='/messagesuccessful'/>;
    }
    return(
      <div><h1>Contact Me</h1>
        <ContactForm
          contactFormFields={contactFormFields}
          handleContactFormChange={this.handleContactFormChange}
          handleContactFormSubmit={this.handleContactFormSubmit}
          verifyRecaptcha={this.verifyRecaptcha}
          recaptchaVerified={recaptchaVerified}/>
      </div>
    )
  }
}

export default Contact;