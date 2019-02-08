import React from 'react';
import logo from '../images/logo6.png';

const AboutUs = () => (
    <div id="home" className="section">
        <div id="bg-img"/>
        <img id="tab-logo" src={logo} alt="탭 로고"/>
        <br></br>
        <h1>한국외대 컴퓨터 학회</h1>
        <hr/>
        <p className="about-us">
            <b>TAB</b>은 <b>Talking and Books</b>의 약자입니다. 서로간에 이야기를 나누며 유대감을 형성하고 책을 통해 지식을 쌓아가자는 뜻으로 1985년 9월 7일 토요일부터 처음 모임이 시작되었습니다. 또한 Key Board 의 Tab 키 처럼 순간순간 자신을 한단계 도약시켜 나가자는데 의의가 있습니다. 대학 4년의 정해진 기간동안 알찬시간을 보낼 수 있도록 실력있는 선배님이 진행하는 정기학회세미나와 프로젝트, 방학스터디등의 학술모임과 MT, 야유회 방중모임등의 친목모임이 이루어 지고 있습니다. 더욱이 TAB 은 재학생뿐만아니라 졸업하신 선배님들과도 주기적인 모임을 가지면서 많은것을 보고 배울 수 있는 기회가 무한합니다. 알찬 대학생활을 보내시고 싶은 학우분들은 TAB을 두드려 주십시요.
        </p>
    </div>
);

export default AboutUs;