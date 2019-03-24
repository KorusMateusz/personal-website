import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './LandingPage';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Projects from "./Projects";
import MessageSuccessful from "./MessageSuccessful";
import MessageFailed from "./MessageFailed";


const Router = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
    <Route path="/messagesuccessful" component={MessageSuccessful} />
    <Route path="/messagefailed" component={MessageFailed} />
  </Switch>
);

export default Router;