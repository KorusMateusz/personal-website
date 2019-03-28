import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './LandingPage/LandingPage';
import AboutMe from './AboutMe/AboutMe';
import Contact from './Contact/Contact';
import Projects from "./Projects/Projects";
import MessageSuccessful from "./Contact/MessageSuccessful";
import MessageFailed from "./Contact/MessageFailed";

const navRoutes = [
  { name: "Home", path: "/", component: LandingPage},
  { name: "About Me", path: "/aboutme", component: AboutMe},
  { name: "Projects", path: "/projects", component: Projects},
  { name: "Contact", path: "/contact", component: Contact},
];

// Landing page path is declared outside of navRoutes, because it needs "exact path" as opposed to "path" for other routes
const Router = () => (
  <Switch>
    {navRoutes.map((route) => (
    <Route exact path={route.path} component={route.component} />
      )
    )}
    <Route path="/messagesuccessful" component={MessageSuccessful} />
    <Route path="/messagefailed" component={MessageFailed} />
  </Switch>
);

navRoutes.unshift();

export { navRoutes }

export default Router;