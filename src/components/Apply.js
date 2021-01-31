import React from "react";

const Apply = () => {
    return (
        <div id="application" className="contents section">
            <h1>APPLICATION</h1>
            <hr />
            <h3>가입 신청 링크 (9/4까지)</h3>
            <div className="apply-button" onClick={() => window.open('https://bit.ly/3hz0A4t')} style={{ color: 'black' }}>지원하러가기!</div>
            <br />
            <br />
                (면접일자는 가입신청이 끝나고 일괄적으로 공지할 예정)
            <br />
            <b>가입문의</b>
            <br />
            학회장: 박민주
            <br />
            전화: 010-9506-7170
        </div>
    );
}
export default Apply;