import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ProjectCard from './ProjectCard.js'
import TheNotesAppScreenshot from '../../../images/TheNotesApp.png'
import PortfolioScreenshot from '../../../images/Portfolio.png'
import CalculatorScreenshot from '../../../images/Calculator.png'

const projectsList = [
  {
    title: "The Notes App",
    description: "Fullstack JavaScript application that allows users to log in with one of their social accounts or " +
      "register with an e-mail and a password. It stores users' data in a MongoDB database. Uses Express server with " +
      "passport for authentication, nodemailer for sending authentication e-mails, Mongoose to talk to the database, " +
      "pug to serve HTML files and jQuery to do CRUD operations on the notes.",
    liveLink: "https://thenotesapp.mkorus.eu",
    githubLink: "https://github.com/KorusMateusz/notesapp",
    screenshot: TheNotesAppScreenshot
  },
  {
    title: "Personal website",
    description: "Personal page that you're on right now. Written as a React app, uses react-router for navigation, " +
      "material-ui for responsive styling and Express server with nodemailer on the backend so the visitor is able " +
      "to send messages.",
    liveLink: "https://mkorus.eu",
    githubLink: "https://github.com/KorusMateusz/personal-website",
    screenshot: PortfolioScreenshot
  },
  {
    title: "Calculator",
    description: "Calculator made with React as a part of Free Code Camp curriculum. Written from " +
      "scratch, no template was provided.",
    liveLink: "https://codepen.io/varret/full/qQXMYL",
    githubLink: "https://gist.github.com/KorusMateusz/f73766eeecb23643f027819c72ba4f0e",
    screenshot: CalculatorScreenshot
  }
];

class Projects extends Component {

  render() {
    return(
      <div style={{margin: "20px"}}>
      <Typography style={{margin: "40px 0 40px"}} variant="h1" align="center">
        Projects
      </Typography>
      <Grid container spacing={24}>
        {projectsList.map( (projectInfo) => (
          <Grid item xs={12} md={6} lg={4}>
            <ProjectCard {...projectInfo} />
          </Grid>
          )
        )}
        </Grid>
      </div>
    )
  }
}



export default Projects;