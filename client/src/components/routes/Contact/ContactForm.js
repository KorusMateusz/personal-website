import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import axios from "axios";
import Recaptcha from "react-recaptcha";
import { Redirect } from 'react-router-dom'

class ContactForm extends Component {
  constructor(){
    super();
    this.state = {
      formFields: {
        from: "",
        email: "",
        subject: "",
        message: ""
      },
      recaptchaVerified: false,
      messageSent: false
    };
    this.handleContactFormChange = this.handleContactFormChange.bind(this);
    this.handleContactFormSubmit = this.handleContactFormSubmit.bind(this);
    this.verifyRecaptcha = this.verifyRecaptcha.bind(this);
  }
  handleContactFormChange = e =>{
    this.setState({
        formFields: {
          ...this.state.formFields,
          [e.target.name]: e.target.value}
      }
    )
  };
  handleContactFormSubmit(e){
    e.preventDefault();
    axios.post("/api/form", this.state.formFields)
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
    const { formFields, recaptchaVerified, messageSent } = this.state;
    if (messageSent) {
      if (messageSent === "error"){
        return <Redirect to='/messagefailed'/>;
      }
      return <Redirect to='/messagesuccessful'/>;
    }
    return(
      <form autoComplete={"off"} onSubmit={this.handleContactFormSubmit}
            style={{display: "flex", flexDirection: "column"}}>
        <div id="sender-info">
          <TextField style={{width: "40%", marginRight: "1%"}}
            required
            name="from"
            label="Your Name"
            value={formFields.from}
            margin="dense"
            onChange={this.handleContactFormChange}
          />
          <TextField style={{width: "59%"}}
            required
            name="email"
            type="email"
            label="Your e-mail address"
            value={formFields.email}
            margin="dense"
            onChange={this.handleContactFormChange}
          />
        </div>
        <TextField
          name="subject"
          label="Subject"
          value={formFields.subject}
          margin="dense"

          onChange={this.handleContactFormChange}
        />
        <TextField
          required
          name="message"
          label="Message"
          multiline
          value={formFields.message}
          margin="dense"
          variant="outlined"
          onChange={this.handleContactFormChange}
        />
        <div style={{display: "flex"}}>
          <Recaptcha
            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            theme="dark"
            verifyCallback={this.verifyRecaptcha}
          />
          <div style={{display: "flex", width: "100%", justifyContent: "center", alignItems: "center"}}>
            <Button variant="contained" color="primary" size="large" type="submit" disabled={!recaptchaVerified}>
              <strong>Send </strong>
              <FontAwesomeIcon  icon={faPaperPlane} size="lg"
                                style={{transform: "translateX(5px) translateY(-2px) rotate(25deg)"}}/>
            </Button>
          </div>
        </div>
      </form>
    )
  }
}

export default ContactForm;