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
                        return <Content img={item[1]} detail={item[2]}/>
                    })
                }
            </div>
        </div>);
};

const Content = (props) => (
    <div className="content">
        <img className="content-img" width='65%' src={props.img} alt="content img"/>
        <p className="content-detail">{props.detail}</p>
    </div>
);

export default Contents;