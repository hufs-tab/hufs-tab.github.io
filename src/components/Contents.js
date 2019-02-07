import React from "react";

const detail_text = '특정 주제에 관심 있는 동아리원이 모여 함께 공부하는 모임으로, 매 학기 약 3~4가지 주제의 SIG가 개설됩니다. Java, 리눅스, 그래픽 등 사람만 모이면 어떤 주제라도 언제든지 OK'

const Contents = (props) => (
    <div id={props.id} className="contents section">
        <h2>{props.contentsName}</h2>
        <div className="content-box">
            <Content detail={detail_text}/>
            <Content detail={detail_text}/>
            <Content detail={detail_text}/>
            <Content detail={detail_text}/>
        </div>
    </div>
);

const Content = (props) => (
    <div className="content">
        <img className="content-img" width='100%' src="https://bit.ly/2UJcPzt" alt="content img"/>
        <p className="content-detail">{props.detail}</p>
    </div>
);

export default Contents;