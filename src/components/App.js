import React from 'react';
import '../styles/App.css';

import Nav from './Nav';
import AboutUs from './AboutUs';
import Contents from './Contents';

const App = () => (
  <React.Fragment>
    <Nav></Nav>
    <AboutUs></AboutUs>
    <Contents id="annual_events" contentsName="ANNUAL_EVENTS"></Contents>
    <Contents id="achievements" contentsName="ACHIEVEMENTS"></Contents>
    <Contents id="notice" contentsName="NOTICE"></Contents>
  </React.Fragment>
);

export default App;
