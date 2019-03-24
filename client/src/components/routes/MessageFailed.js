import React from "react";
import { Link } from 'react-router-dom'

const MessageFailed = () => (
  <div>
    <h1> Something went wrong :(</h1>
    <p>Sorry, your message was not sent.
      Please e-mail me at <a href = "mailto: contact@mkorus.eu">contact@mkorus.eu</a>.
      <br/>
      <Link to={"/"}>Back to homepage</Link>
    </p>
  </div>
);

export default MessageFailed;