import React from 'react';
import '../styles/App.css';

import Nav from './Nav';
import AboutUs from './AboutUs';
import Contents from './Contents';
import FAQ from './FAQ';
import Apply from './Apply';
import Footer from './Footer';

import picnic from '../images/food-basket.svg';
import pt from '../images/presentation.svg';
import study from '../images/student.svg';
import tent from '../images/tent.svg';

import job from '../images/job.png';
import hackathon from '../images/hackathon.png';
import contest from '../images/whale.png';
import acm from '../images/acm.png';
import gcp from '../images/gcpug.png';
import hanium from '../images/hanium.png';
import hufo from '../images/huformation.png';

const annual_events=[
  ['스터디', study, '학회원들끼리 관심있는 주제로 함께 공부하거나 세미나를 진행합니다. ex) 기초프로그래밍, 깃, 인공지능, 블록체인'],
  ['야유회', picnic, '봄에 서울 올림픽 공원에서 졸업한 학회 선배님들과 함께 네트워킹 할 수 있는 야유회를 개최합니다. '],
  ['발표', pt, '개인 혹은 팀으로 진행한 프로젝트, 개인이 공부한 주제를 갖고 학기 중에 발표하는 기회를 갖습니다.'],
  ['캠핑', tent, '여름과 가을 사이 난지캠핑장에서 MT를 진행하여 학회원 간의 친목도모 하는 기회를 갖습니다.'],
];

const achievements=[
  ['진로',job,'학회출신의 선배들께서 이름난 기업에서 일하고 계십니다.'],
  ['해커톤', hackathon, '학회원들이 팀을 구성하여 네이버AI해커톤에 참가하여 우수한 성적을 거뒀습니다.'],
  ['개발대회', contest, '팀을 구성하여 웨일 확장앱 개발대회에 참가했습니다.','<웨일 확장앱: 스톡인포>'],
  ['알고리즘대회',acm, '팀을 구성하여 ACM-ICPC 알고리즘 대회 참가했습니다.'],
  ['한이음ICT공모전 입상',hanium,'한이음 ICT 공모전에 학회원이 팀을 꾸려 나가서 우수한 성적을 거뒀습니다.'],
  ['구글클라우드 플랫폼 우승', gcp, '구글 클라우드 플랫폼 해커톤 대회에서 우승을 했습니다.'],
  ['학식 챗봇 개발',hufo, '카카오톡 플러스친구를 이용한 한국외대 학식 정보 제공뿐만 아니라 도서관 좌석정보도 제공합니다.','<카톡 플친: 훕포메이션>']
]

const App = () => (
  <React.Fragment>
    <Nav/>
    <AboutUs/>
    <Contents id="annual_events" contentsName="ANNUAL EVENTS" items={annual_events}/>
    <Contents id="achievements" contentsName="ACHIEVEMENTS" items={achievements}/>
    <Apply/>
    <FAQ/>
    <Footer></Footer>
  </React.Fragment>
);

export default App;
