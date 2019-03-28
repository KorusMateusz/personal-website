import React from "react";
import { Link } from 'react-router-dom'
import Typography from "@material-ui/core/Typography/Typography";
import Button from "@material-ui/core/Button/Button";

const MessageFailed = () => (
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", margin: "auto"}}>
    <Typography style={{margin: "40px 0 40px"}} variant="h1" align="center">
      Oops<br/>
    </Typography>
    <Typography style={{margin: "20px 0 20px"}} variant="h2" align="center">
      Something went wrong :(
    </Typography>
    <Typography style={{marginTop: "40px"}} variant="h5" align="center">
      Sorry, your message was not sent.
      Please e-mail me at <a href = "mailto: contact@mkorus.eu">contact@mkorus.eu</a>. <br/><br/>
    </Typography>
    <Button color="primary" variant="contained" component={Link} to={"/"} size="large">
      Back to homepage
    </Button>
  </div>
);

export default MessageFailed;