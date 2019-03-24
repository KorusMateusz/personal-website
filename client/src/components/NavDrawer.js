import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from "@material-ui/core/IconButton/IconButton";
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

  toggleDrawer = (isOpen) => () => {
    this.setState({
      open: isOpen,
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          <ListItem button component={Link} to="/">
            <ListItemText primary={"Home"}/>
          </ListItem>
          <ListItem button component={Link} to="/aboutme">
            <ListItemText primary={"About Me"}/>
          </ListItem>
          <ListItem button component={Link} to="/projects">
            <ListItemText primary={"Projects"}/>
          </ListItem>
          <ListItem button component={Link} to="/contact">
            <ListItemText primary={"Contact"}/>
          </ListItem>
        </List>
      </div>
    );

    return (
      <div>
        <IconButton className={classes.menuButton} color= "inherit" aria-label="Menu" onClick={this.toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>
        <Drawer open={this.state.open} onClose={this.toggleDrawer(false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}
          >
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