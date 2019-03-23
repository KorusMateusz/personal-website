import React from "react";
import Recaptcha from "react-recaptcha";

const ContactForm = ({contactFormFields, handleContactFormChange, handleContactFormSubmit,
                       verifyRecaptcha, recaptchaVerified}) =>(
  <div>
    <form autoComplete={"off"} onSubmit={handleContactFormSubmit}>
      <input
        type={"text"}
        name={"from"}
        value={contactFormFields.from}
        placeholder={"From"}
        onChange={handleContactFormChange}
      />
      <input
        type={"text"}
        name={"subject"}
        value={contactFormFields.subject}
        placeholder={"Subject"}
        onChange={handleContactFormChange}
      />
      <input
        type={"text"}
        name={"message"}
        value={contactFormFields.message}
        placeholder={"Message"}
        onChange={handleContactFormChange}
      />
      <Recaptcha
        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
        verifyCallback={verifyRecaptcha}
      />
      <button type={"submit"} disabled={!recaptchaVerified}>Submit</button>
    </form>
  </div>
);

export default ContactForm;