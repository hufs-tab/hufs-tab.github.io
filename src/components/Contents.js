import React from "react";

let cnt = 0;
let bgColor = '';

const Contents = (props) => {
    cnt += 1;
    if(cnt%2 === 0){
        bgColor = 'rgb(230,230,230)';
    } else {
        bgColor = 'white';
    }
    console.log(bgColor);
    return (
        <div id={props.id} className="contents section" style={{backgroundColor: bgColor}}>
            <h1>{props.contentsName}</h1>
            <div className="content-box">
                {
                    props.items.map(item =>{
                        return <Content detail={item}/>
                    })
                }
            </div>
        </div>);
};

const Content = (props) => (
    <div className="content">
        <img className="content-img" src={props.detail[1]} alt="content img"/>
        <h2>{props.detail[0]}</h2>
        <p className="content-detail">{props.detail[2]}</p>
    </div>
);

export default Contents;