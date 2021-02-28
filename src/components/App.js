import React from "react";
import "../styles/App.css";

import Nav from "./Nav";
import AboutUs from "./AboutUs";
import Contents from "./Contents";
import FAQ from "./FAQ";
import Apply from "./Apply";
import Footer from "./Footer";

import picnic from "../images/food-basket.svg";
import pt from "../images/presentation.svg";
import study from "../images/student.svg";
import tent from "../images/tent.svg";

import job from "../images/job.png";
import army from "../images/swSoldier.png";
import hackathon from "../images/hackathon.png";
import contest from "../images/whale.png";
import acm from "../images/acm.png";
import gcp from "../images/gcpug.png";
import hanium from "../images/hanium.png";
import hufo from "../images/huformation.png";
import Game from "./Game";
import unity_logo from "../images/unity_logo.JPG";

const annual_events = [
    [
        "스터디",
        study,
        "학회원들끼리 관심있는 주제로 함께 공부하거나 세미나를 진행합니다. ex) 기초프로그래밍, 깃, 인공지능, 블록체인",
    ],
    [
        "야유회",
        picnic,
        "봄에 서울 올림픽 공원에서 졸업한 학회 선배님들과 함께 네트워킹 할 수 있는 야유회를 개최합니다. ",
    ],
    [
        "발표",
        pt,
        "개인 혹은 팀으로 진행한 프로젝트, 개인이 공부한 주제를 갖고 학기 중에 발표하는 기회를 갖습니다.",
    ],
    [
        "캠핑",
        tent,
        "여름과 가을 사이 난지캠핑장에서 MT를 진행하여 학회원 간의 친목도모 하는 기회를 갖습니다.",
    ],
];

const achievements = [
    [
        "FIDO 공모전",
        "https://teeware.kr/wp-content/uploads/2019/05/fido.jpg",
        "보안 프로토콜인 FIDO를 활용한 해커톤을 TAB 부원들과 같이 참가했습니다.",
    ],
    [
        "개발특기병",
        army,
        "전문연구요원 및 육해공군 특기병으로 만기전역",
        "<관련 상담 가능>",
    ],
    ["알고리즘대회", acm, "팀을 구성하여 ACM-ICPC 알고리즘 대회 참가했습니다."],
    [
        "개발대회",
        contest,
        "팀을 구성하여 웨일 확장앱 개발대회에 참가했습니다.",
        "<웨일 확장앱: 스톡인포>",
    ],
    [
        "교내 알고리즘 은상 입상",
        "https://lh3.googleusercontent.com/vI18ee528-6Jxr5TAcrz1WOmVJiT03OflcIA1TXeHZA9q5o3zYWki2QM3SYnSS0n_i6JMnF9_WFb0H8Rwue2M3QOhEsz_2q4aPdkCd9l1vN7555ikRrTdv2-TrMTMFBTZwbmBe7q94i1FkH4AZmW299ciwTgrfQStVkFaxLK4x-IrPbooxCkp5oPyUUuLeOFWX0GtRkEAWhSMD5xozFaymHeBuiIBi-Mx_M58_BmrRSUMpq0VtCGyMGG5QelKel2xi5vz_d5eIlDf8mS8-an3W51tbOCJWSjwGINiHtVSMczMIV3ZXYB2eblbjz60U6mB7P7E8nt5hOwbY8uhwkO--nd-UsYqz7jl49oLwXGdrwM9_OGv1S2Djwl5Q--Sg-YIBnPCP1v34rYXJuoluzjpiCSgCXxempHgcBWZ_OSjUj41Hckmf3bY94KHRC9DPSj7ulBTm060idMDuCyt_YJsY0qDAz5AZ1_25r6qwENwtHFR39Sm4cwkTrDxCrgFWpalAL7XdL8gJCz6pCL8iSIBbljI4E6fSjbvRRTxuPLc8UNw_6-boIJCEsYCU0lkpky8Tt5vA164MRo_nLdXXxBc5ZwL3kzlONDTiMiA40RYhMRtwOgIt-mc2_hnaEaQO3hbIaXe4JT1c7i_oUYH--8d0HSY24bdEUZBMVzBe5vAe-wolcz7nZjQiX69eWoM65A-XJe87UA9lDHj_BnuCRcLyz78RtQwN3TKZolV2P5hoUxTgrJguF2dT8=w959-h639-no",
        "교내에서 DSC HUFS에서 진행한 'HUFS CODE FESTIVAL'에 참가해서 은상을 수상했습니다.",
    ],
    [
        "K-SW스퀘어 프로그램 합격",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_c8BVMxGcMkoeRr_BsoEJr5QsO3KNMGBKeQ&usqp=CAU",
        "미국 퍼듀대학교에서 캡스톤 프로젝트 실시",
    ],
    [
        "부스트코스 대학생 서포터즈 2기(8명)",
        "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99A74F415B0676902B",
        "기업과 함께 만든 실무형 프로젝트 교육에 참여하고 현장에서 일하는 전문가 멘토링을 무료로 받을 수 있는 기회를 갖게 되었습니다.",
    ],
];

const studyList = [
    [
        "웹",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/280px-React-icon.svg.png",
        "HTML,css,javascript,React를 통해 웹 개발 공부를 했습니다.",
    ],
    [
        "앱",
        "https://media.vlpt.us/images/jojo_devstory/post/dae32386-bffc-40c3-b866-5c1e64516902/Android%2010_0.jpg",
        "자바 기반으로 안드로이드 앱을 만들었습니다.",
    ],
    [
        "게임",
        unity_logo,
        "Unity를 활용해서 간단한 게임 제작을 해봤습니다.",
    ],
    [
        "딥러닝",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/TensorFlowLogo.svg/1200px-TensorFlowLogo.svg.png",
        "'모두의 딥러닝'을 통해 딥러닝의 기초를 공부했습니다.",
    ],
    [
        "보안",
        "https://www.midashri.com/hubfs/inAIR/img/web/sub/01_intro/process/23_01.png",
        "보안 기초에 대해 공부했습니다.",
    ],
    [
        "알고리즘",
        "https://st4.depositphotos.com/16138592/30030/v/950/depositphotos_300305330-stock-illustration-algorithm-logo-line-vector-design.jpg",
        "알고리즘 스터디하고 싶은 학우들끼리 진행되었습니다.",
    ],
    [
        "iOS",
        "data:image/png;base64,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",
        "아이폰 어플을 만드는 iOS 스터디를 진행했습니다. (맥북 소지자만 가능)",
    ],
];

const App = () => (
    <React.Fragment>
        <AboutUs />
        <Game />
        <FAQ />
        <Contents
            id="annual_events"
            contentsName="ANNUAL EVENTS"
            items={annual_events}
        />
        <Contents id="study-list" contentsName="STUDY LIST" items={studyList} />
        <Contents
            id="achievements"
            contentsName="ACHIEVEMENTS"
            items={achievements}
        />
        <Apply />
        <Footer />
    </React.Fragment>
);

export default App;
