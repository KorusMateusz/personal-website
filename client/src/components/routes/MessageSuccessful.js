import React from "react";
import {Link} from "react-router-dom";

const MessageSuccessful = () => (
  <div>
    <h1>Your message was sent successfuly</h1>
    <p>Thank you for sending your message.<br/>I will try to get in touch as soon as possible.<br/>
      <Link to={"/"}>Back to homepage</Link>
    </p>
</div>
);

export default MessageSuccessful;