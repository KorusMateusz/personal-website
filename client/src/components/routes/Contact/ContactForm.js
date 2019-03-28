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
      recaptcha: false,
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
    let data = this.state.formFields;
    data['g-recaptcha-response'] = this.state.recaptcha;
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
        recaptcha: response
      })
    }
  }

  render() {
    const { formFields, recaptcha, messageSent } = this.state;
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
        {/*using grid here to allow pretty display of captcha and send button in either one or two rows*/}
        <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", marginTop: "10px"}}>
          <Recaptcha
            sitekey="6LcQW44UAAAAAHxGkQlxAt89Njt0-Vmf0kcTdNp6"
            theme="dark"
            verifyCallback={this.verifyRecaptcha}
          />
          <div style={{display: "flex", width: "100%", justifyContent: "center", alignItems: "center", marginTop: "10px"}}>
            <Button variant="contained" color="primary" size="large" type="submit" disabled={!recaptcha}>
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