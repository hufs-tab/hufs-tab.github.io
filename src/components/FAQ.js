import React from 'react';

const FAQ = () => {
    return (
        <>
            <div id="faq" className="contents section">
                <h1>TAB에 대해 <br />궁금하신가요?</h1>
                <hr />
                <div className="content-box" style={{ maxWidth: '500px', width: "80%", textAlign: 'center' }}>
                    <blockquote>
                        <p className="question">
                            <b>&gt;</b> 선발 조건이 어떻게 되나요?
                        </p>
                        <p className="answer">
                            과 선배들과 교류를 하고싶다!
                        <br />
                        컴퓨터에 대해 하나도 몰라서 좀 알고싶다!
                        <br />
                        배우고 싶은게 있다!
                        <br />
                        나는 코딩을 좀 한다!
                        <br />
                        사람들과 프로젝트를 하고싶다!
                        <br />
                            <b>나는 취미가 코딩입니다!</b>
                            <br />
                            <br />
                            실력이 없어도 다 같이 배워나갈 수 있습니다! 이 중에 하나만 해당되더라도 신청해주세요! 대환영입니다!
                        </p>
                    </blockquote>
                    <blockquote>
                        <p className="question">
                            <b>&gt;</b> 신입 부원 선발은 어떻게 하나요?
                        </p>
                        <p className="answer">
                            아래의 구글 설문을 통해 신청을 받은 후 <br />
                            면접을 통해 선발할 계획입니다.
                        </p>
                    </blockquote>
                    <blockquote>
                        <p className="question">
                            <b>&gt;</b> 올해는 어떤 활동을 하나요?
                        </p>
                        <p className="answer">
                            코딩에 대해 흥미를 심어주고 학교 공부 그 이상의 것들을 경험할 수 있도록 다양한 스터디 활동과 세미나들이 있을 예정입니다.
                        </p>
                    </blockquote>
                    <blockquote>
                        <p className="question">
                            <b>&gt;</b> 개발에 대해 막연한 관심은 있으나, <br />개발에 대한 실질적인 지식은 없는데 들어갈 수 있나요?
                        </p>
                        <p className="answer">
                            다양한 주제의 세미나가 열려 공부할 기회와 환경이 지속적으로 주어지기 때문에 처음부터 컴퓨터를 잘 하실 필요는 없습니다. <br />
                        </p>
                        <p className="answer">
                            전공 공부와 더불어 꾸준히 학회 활동에 참여할 열정만 있다면 환영입니다.<br />
                        </p>
                    </blockquote>
                </div>
            </div>
        </>
    );
}

export default FAQ;