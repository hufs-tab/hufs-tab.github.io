import React, { useState, useCallback } from "react";
import styled from "styled-components";

const For21 = styled.div`
    font-size: 24px;
    font-weight: bold;
`;

const GameContent = styled.div``;

const GameResult = styled.div`
    margin: 10px;
    font-size: 24px;
    font-weight: bold;
`;

const GameStageQuiz = styled.div`
    margin: 10px;
    font-size: 24px;
    font-weight: bold;
`;

const GameButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    font-size: 18px;
    font-weight: bold;
    width: 80px;
    height: 50px;
    background-color: #ddd;
    color: black;
    border-radius: 10px;
    box-shadow: 0 3px 3px #bbb;
    cursor: pointer;
    transition: 0.2s;
`;

const GoToApply = styled.div`
    margin: 10px;
    font-size: 24px;
    padding: 10px;
    font-weight: bold;
    background-color: yellow;
    border-radius: 10px;
    box-shadow: 0 3px 3px #bbb;
    cursor: pointer;
`;

const quizList = ["나는 컴퓨터공학부다", "코딩에 관심이 있다!"];

const Game = () => {
    const [stage, setStage] = useState(0);
    const [quizStatus, setQuizStatus] = useState(0);

    const handleYes = useCallback(
        () => {
            if (stage === 0) setStage(1);
            else setQuizStatus(1);
        },
        [stage, setStage, setQuizStatus]
    );
    const handleNo = useCallback(
        () => {
            setQuizStatus(1);
        },
        [setQuizStatus]
    );

    return (
        <div className="section contents">
            <For21>21학번을 위한</For21>
            <h1>"코린이" 탈출하기!!</h1>
            <hr />
            <GameContent>
                {quizStatus === 0 ? (
                    <>
                        <GameStageQuiz>{quizList[stage]}</GameStageQuiz>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <GameButton onClick={handleYes}>YES!</GameButton>
                            <GameButton onClick={handleNo}>NO!</GameButton>
                        </div>
                    </>
                ) : stage === 0 ? (
                    <GameResult>ㅠ,,ㅠ 안녕~</GameResult>
                ) : (
                            <>
                                <GameResult>지금 당장 지원하자!!</GameResult>
                                <GoToApply>
                                    <a href="#application" style={{ color: "black" }}>
                                        지원하러가기
                            </a>
                                </GoToApply>
                            </>
                        )}
            </GameContent>
        </div>
    );
};

export default Game;
