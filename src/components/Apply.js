import React from "react";

const Apply = () => {
    return (
        <div id="application" className="contents section">
            <h1>APPLICATION</h1>
            <hr />
            <h3>가입 신청 링크 (3/2~3/9)</h3>
            <div className="apply-button" onClick={() => window.open('https://forms.gle/oLqVV4RezbbRfzBd9')} style={{ color: 'black' }}>지원하러가기!</div>
            <br />
            <br />
                (면접일자는 가입신청이 끝나고 일괄적으로 공지할 예정)
            <br />
            <br />
            <b>가입문의</b>
            학회장: 서다원
            <br />
            전화: 010-9779-6921
        </div>
    );
}
export default Apply;