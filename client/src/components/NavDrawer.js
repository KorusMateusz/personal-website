import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from "@material-ui/core/IconButton/IconButton";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import {navRoutes} from "./routes/Router"
import {Link} from "react-router-dom";

const styles = {
  list: {
    width: 250,
  },
  menuButton:{
    marginRight: 20,
    marginLeft: -12
  }
};


class NavDrawer extends React.Component {
  state = {
    open: false
  };

  toggleDrawer = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  };


  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list} style={{position: "relative"}}>
        <List>
          <div style={{display: 'flex', alignItems: 'center', padding: '0 8px', justifyContent: 'space-between'}}>
            <Typography variant="h6" style={{justifySelf: "start", marginLeft: "6px"}}>
              Navigation
            </Typography>
            <IconButton onClick={this.toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          {navRoutes.map((route)=>(
          <ListItem button component={Link} to={route.path} onClick={this.toggleDrawer}>
            <ListItemText primary={route.name}/>
          </ListItem>
          ))}
        </List>
      </div>
    );

    return (
      <div>
        <IconButton className={classes.menuButton} color= "inherit" aria-label="Menu" onClick={this.toggleDrawer}>
          <MenuIcon />
        </IconButton>
        <Drawer open={this.state.open} onClose={this.toggleDrawer}>
          <div>
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

NavDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavDrawer);