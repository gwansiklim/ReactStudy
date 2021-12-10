// 가상 돔 만들기!
import React from 'react';
import img from './mypet.png';
import { useHistory } from 'react-router-dom';

const Start = (props) => {
    const history = useHistory();

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            padding: "16px",
            boxSizing: "border-box",
        }}>
            <img src={img} style={{
                width: "50vw",
                margin: "16px",
            }} />
            <h1 style={{ fontSize: "1.5em", lineHeight: "1.5" }}>
                나는 <span style={{
                    backgroundColor: "#fef5d4",
                    padding: "5px 10px",
                    borderRadius: "30px",
                }}>{props.name}</span> 대해 얼마나 알고 있을까?
                </h1>
            <input style={{
                border: "1px solid #dadafc",
                borderRadius: "30px",
                padding: "10px",
                width: "100%",
            }} />
            <button onClick={() => {
                history.push("/quiz");
            }} style={{
                padding: "10px 36px",
                backgroundColor: "#dadafc",
                border: "#dadafc",
                borderRadius: "30px",
                margin: "36px 0px",
            }}>시작하기</button>
        </div>
    );
}

export default Start;