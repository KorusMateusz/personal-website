import React, { Component } from 'react';
import Typography from "@material-ui/core/Typography/Typography";
import Grid from "@material-ui/core/Grid/Grid";
import {withStyles} from "@material-ui/core";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import TechnologyListItem from "./TechnologyListItem"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons'

const calculateAge = () => {
  return new Date(new Date() - new Date(1996, 10, 30)).getFullYear() - 1970;
};

const styles = {
  cell: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
};

const frontEndTechnologies = [
  {title: "CSS3", icon: faCss3, technologies: ["Bootstrap", "SASS"]},
  {title: "React", icon: faReact, technologies: ["React Router", "Material-UI"]}
];

const backEndTechnologies = [
  {title: "Node.js", icon: faNodeJs, technologies: ["Express", "MongoDB with Mongoose", "Passport", "Nodemailer",
      "Pug", "Google Recaptcha"]}
];

class About extends Component {

  render() {
    return(
      <div style={{margin: "20px"}}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Typography style={{margin: "20px 0 20px"}} variant="h1" align="center">
              Hello
            </Typography>
            <Typography variant="h4" align="center" style={{marginBottom: "20px"}}>
              My name is Mateusz Korus<br/>I'm an aspiring JavaScript developer
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} className={this.props.classes.cell}>
            <Typography variant="h6" align="center" style={{marginTop: "10px"}}>
              Currently I am {calculateAge()} years old<br/>
              Based in Cracow, Poland<br/>
              Student at Cracow University of Technology
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} className={this.props.classes.cell}>
            <iframe
              title = "google-map"
              width = "600"
              height = "215"
              frameBorder = "0"
              style = {{border: 0}}
              src = "https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ0RhONcBEFkcRv4pHdrW2a7Q&key=AIzaSyBPlUBjcuejZKFGFRfe9MpYIwQXemc6x04"
              allowFullScreen > </iframe>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" align="center" style={{margin: "40px 0 20px"}}>
              I am a native Polish speaker, fluent in English, learning German<br/>
              I have no commercial experience in programming<br/>
              I am looking for a position that would allow me to apply and improve my developer skills<br/>
              I am available up to 4 days a week<br/>
              Due to being a student in Cracow, I cannot relocate
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" align="center" style={{margin: "40px 0 20px"}}>
              Front-End technologies I use:<br/>
            </Typography>
            <ExpansionPanel>
              <ExpansionPanelSummary>
                <Typography variant="h6"><FontAwesomeIcon icon={faHtml5}/>&nbsp;&nbsp;HTML5</Typography>
              </ExpansionPanelSummary>
            </ExpansionPanel>
            {frontEndTechnologies.map((item) => (<TechnologyListItem item={item}/>))}
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" align="center" style={{margin: "40px 0 20px"}}>
              Back-End technologies I use:<br/>
            </Typography>
            {backEndTechnologies.map((item) => (<TechnologyListItem item={item}/>))}
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(About);