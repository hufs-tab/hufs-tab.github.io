import React from 'react';
import '../styles/App.css';

import Nav from './Nav';
import AboutUs from './AboutUs';
import Contents from './Contents';
import Notice from './Notice';
import Footer from './Footer';

import picnic from '../images/food-basket.svg';
import pt from '../images/presentation.svg';
import study from '../images/student.svg';
import tent from '../images/tent.svg';

const annual_events=[
  ['스터디', study, '학회원들끼리 관심있는 주제로 함께 공부하거나 세미나를 진행합니다. ex) 기초프로그래밍, 깃, AI, 블록체인'],
  ['야유회', picnic, '봄에 88올림픽 공원에서 졸업한 학회 선배님들과 함께 네트워킹 할 수 있는 야유회를 개최합니다. '],
  ['발표', pt, '개인 혹은 팀으로 진행한 프로젝트, 개인이 공부한 주제를 갖고 학기 중에 발표하는 기회를 갖습니다.'],
  ['캠핑', tent, '여름과 가을 사이 난지캠핑장에서 MT를 진행하여 학회원 간의 친목도모 하는 기회를 갖습니다.'],
];

const achievements=[
  ['취업','',''],
  ['대회'],
  [''],
]

const App = () => (
  <React.Fragment>
    <Nav/>
    <AboutUs/>
    <Contents id="annual_events" contentsName="ANNUAL EVENTS" items={annual_events}/>
    <Contents id="achievements" contentsName="ACHIEVEMENTS" items={annual_events}/>
    <Notice/>
    <Footer></Footer>
  </React.Fragment>
);

export default App;
