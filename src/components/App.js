import React from 'react';
import '../styles/App.css';

import Nav from './Nav';
import AboutUs from './AboutUs';
import Contents from './Contents';
import Footer from './Footer';

import picnic from '../images/food-basket.svg';
import pt from '../images/presentation.svg';
import study from '../images/student.svg';
import tent from '../images/tent.svg';

const annual_events=[
  ['스터디', study, '봄에 88 올림픽 공원에서 졸업한 선배님들과 노는 날'],
  ['야유회', picnic, '봄에 88 올림픽 공원에서 졸업한 선배님들과 노는 날'],
  ['발표', pt, '봄에 88 올림픽 공원에서 졸업한 선배님들과 노는 날'],
  ['캠핑', tent, '봄에 88 올림픽 공원에서 졸업한 선배님들과 노는 날'],
];

const App = () => (
  <React.Fragment>
    <Nav/>
    <AboutUs/>
    <Contents id="annual_events" contentsName="ANNUAL EVENTS" items={annual_events}/>
    <Contents id="achievements" contentsName="ACHIEVEMENTS" items={annual_events}/>
    <Contents id="notice" contentsName="NOTICE" items={annual_events}/>
    <Footer></Footer>
  </React.Fragment>
);

export default App;
