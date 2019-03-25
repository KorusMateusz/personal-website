import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import MichaelScottWhite from '../../MichaelScottWhite.svg';

class LandingPage extends Component {
  render() {
    //padding on bottom needed to always have place for Michael Scott's image
    return(
      <div style={{ width: "100%", margin: "auto", paddingBottom: "25vw"}}>
        <Typography style={{margin: "40px"}} variant="h1" align="center">
          Mateusz Korus<br/>
        </Typography>
        <Typography style={{margin: "20px"}} variant="h2" align="center">
          JavaScript developer
        </Typography>
        <img style={{width:"100%", maxHeight: "225px", position: "absolute", bottom: 0}} src={MichaelScottWhite} alt=""/>
      </div>
    )
  }
}

export default LandingPage;