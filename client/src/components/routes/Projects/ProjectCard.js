import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';

import React, {Component} from "react";

class ProjectCard extends Component {
  state = {
    showDescription: false,
    expandIconRotation: 0
  };

  toggleDescritption = () => {
    this.setState(prevState => ({
      showDescription: !prevState.showDescription,
      expandIconRotation: prevState.expandIconRotation+180
    }));
  };

  render() {
    const { title, description, liveLink, githubLink, screenshot } = this.props;
    return (
      <Card>
        <CardActionArea onClick={this.toggleDescritption}>
          <CardMedia
            component="img"
            alt={title + "screenshot"}
            image={screenshot}
            title={title}
          />
          <CardContent  style={{position: "relative"}}>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <ExpandMoreIcon style={{color: "white", position: "absolute", right: 0, bottom: 0,
              margin: "25px", transform: `rotate(${this.state.expandIconRotation}deg)`}}/>
            <Collapse in={this.state.showDescription}>
              <Typography component="p" style={{marginRight: "30px"}}>
              {description}
              </Typography>
            </Collapse>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" href={liveLink} target="_blank">
            Live version
          </Button>
          <Button size="small" color="primary" href={githubLink} target="_blank">
            GitHub link
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default ProjectCard;