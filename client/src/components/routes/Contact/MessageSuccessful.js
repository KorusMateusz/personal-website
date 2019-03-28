import React from "react";
import {Link} from "react-router-dom";
import Typography from "@material-ui/core/Typography/Typography";
import Button from "@material-ui/core/Button/Button";

const MessageSuccessful = () => (
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", margin: "auto"}}>
    <Typography style={{margin: "40px 0 40px"}} variant="h1" align="center">
      Success<br/>
    </Typography>
    <Typography style={{margin: "20px 0 20px"}} variant="h2" align="center">
      Message sent successfully
    </Typography>
    <Typography style={{marginTop: "40px"}} variant="h5" align="center">
      Thank you for sending your message.<br/>I will try to get in touch as soon as possible.<br/><br/>
    </Typography>
    <Button color="primary" variant="contained" component={Link} to={"/"} size="large">
      Back to homepage
    </Button>
  </div>
);

export default MessageSuccessful;