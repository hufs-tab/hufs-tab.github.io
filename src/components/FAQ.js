import React from 'react';

const Notice = () => {
    return (
        <div id="faq" className="contents section">
            <h1>FAQ</h1>
            <hr/>
            <div className="content-box" style={{maxWidth: '500px', width:"80%", textAlign:'center'}}>
                <blockquote>
                    <p className="question">
                        > 신입 부원 선발은 어떻게 하나요?
                    </p>
                    <p className="answer">
                        아래의 구글 설문을 통해 신청을 받은 후<br/> 면접을 통해 선발할 계획입니다.
                        <br/>
                        (면접 과제가 있습니다.)
                    </p>
                </blockquote>
                <blockquote>
                    <p className="question">
                        > 올해는 어떤 활동을 하나요?
                    </p>
                    <p className="answer">
                        1학기엔 기초 프로그래밍 세미나가 진행되며<br/>신청자가 있다면 인공지능, 블록체인 등 관심있는 주제로 스터디를 계획 하고 있고,<br/> 희망자에 한하여 선배들과 프로젝트를 같이 진행할 수 있습니다.
                    </p>
                </blockquote>
                <blockquote>
                    <p className="question">
                        > 개발에 대해 막연한 관심은 있으나, <br/>개발에 대한 실질적인 지식은 없는데 들어갈 수 있나요?
                    </p>
                    <p className="answer">
                        다양한 주제의 세미나가 열려 공부할 기회와 환경이 지속적으로 주어지기 때문에 처음부터 컴퓨터를 잘 하실 필요는 없습니다. <br/>
                    </p>
                    <p className="answer">
                        전공 공부와 더불어 꾸준히 학회 활동에 참여할 열정만 있다면 환영입니다.<br/>
                    </p>
                </blockquote>
            </div>
        </div>
    );
}

export default Notice;