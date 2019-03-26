import React from 'react';
import ContactForm from "./ContactForm";
import Typography from "@material-ui/core/Typography/Typography";
import Grid from "@material-ui/core/Grid/Grid";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faFreeCodeCamp, faTwitter } from '@fortawesome/free-brands-svg-icons'

const socialLinks = [
  { platform: "GitHub", link: "https://github.com/KorusMateusz", icon: faGithub},
  { platform: "Free Code Camp", link: "https://www.freecodecamp.org/korusmateusz", icon: faFreeCodeCamp},
  { platform: "LinkedIn", link: "https://www.linkedin.com/in/KorusMateusz", icon: faLinkedin},
  { platform: "Twitter", link: "https://twitter.com/Varret_", icon: faTwitter}
];


function Contact() {
  return (
    <div style={{margin: "20px"}}>
      <Typography style={{margin: "40px 0 40px"}} variant="h1" align="center">
        Contact me
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" align="center" style={{marginBottom: "20px"}}>
            Find me on:
          </Typography>
          <List>
            {socialLinks.map( (linkInfo) => (
              <ListItem button component="a" href={linkInfo.link} target="_blank">
                <ListItemIcon>
                  <FontAwesomeIcon icon={linkInfo.icon} size="2x"/>
                </ListItemIcon>
                <ListItemText primary={linkInfo.platform} secondary={linkInfo.link} />
              </ListItem>
              )
            )}
          </List>
        </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" align="center" style={{marginBottom: "20px"}}>
              Send me a message:
            </Typography>
            <ContactForm/>
          </Grid>
      </Grid>
    </div>
  )
}

export default Contact;