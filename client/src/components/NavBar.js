import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import NavDrawer from "./NavDrawer"
import {navRoutes} from "./routes/Router"

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  }
};


function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root} style={{ paddingTop: 56 }}>
      <AppBar position="fixed">
        <Toolbar>
          <NavDrawer />
          <Typography variant="h6" color="inherit" className={classes.grow}>
            <Link to="/" style={{textDecoration: "none", color: "inherit"}}>Mateusz Korus' website</Link>
          </Typography>
          <div id={"full-size-navbuttons"}>
            {navRoutes.map((route)=>(
              <Button color="inherit" component={Link} to={route.path}>
                {route.name}
              </Button>
            ))}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);