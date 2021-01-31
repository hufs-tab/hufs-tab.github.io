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
        "React를 통해 웹 개발 공부를 했습니다.",
    ],
    [
        "앱",
        "https://media.vlpt.us/images/jojo_devstory/post/dae32386-bffc-40c3-b866-5c1e64516902/Android%2010_0.jpg",
        "자바 기반으로 안드로이드 앱을 만들었습니다.",
    ],
    [
        "게임",
        "https://blog.iwanhae.ga/content/images/size/w2000/2019/05/kisspng-unity-game-engine-logo-video-game-corelle-brands-5b059884557253.68756902152709338035.png",
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
        "https://w.namu.la/s/862757808bea89c506785a52a2f703ab78c57bc66973ab8fdd5201cc261f2a29096e8f809522f9efa8a8f99c0c43782621fb696358901c287616c8b3c4db27a26cd6db48728ee3b1ba25b500338da358ee2a6cb82eddbb49b275ed5d0aa118d9",
        "알고리즘 스터디하고 싶은 학우들끼리 진행되었습니다.",
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
