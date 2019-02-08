import React from 'react';

const Notice = () => {
    return (
        <div id="notice" className="contents section">
            <h1>NOICE</h1>
            <hr/>
            <div className="content-box" style={{maxWidth: '500px', width:"80%", textAlign:'center'}}>
                <p>
                    &lt;면접을 통해 신입회원을 선발합니다&gt;
                <br/>
                <br/>
                    1학기에는 신입생을 대상으로 기초 프로그래밍 세미나가 열릴 예정입니다.
                <br/>
                <br/>
                    그 후에도 다양한 주제의 세미나가 열려 공부할 기회와 환경이 지속적으로 주어지기 때문에 처음부터 컴퓨터를 잘 하실 필요는 없습니다. 
                <br/>
                <br/>
                    전공 공부와 더불어 꾸준히 학회 활동에 참여할 열정만 있다면 환영입니다.
                <br/>
                <br/>
                가입문의:
                <br/>
                &lt; 회장연락처 or 구글설문 or 회원가입 &gt;
                </p>
            </div>
        </div>
    );
}

export default Notice;