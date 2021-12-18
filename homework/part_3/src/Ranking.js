// 랭킹 하기 페이지
import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Ranking = (props) => {
    const history = useHistory();
    const _user_data = [
        { score: 40, user_name: "임관식1", message: "담아 안녕!!" },
        { score: 80, user_name: "임관식2", message: "담아 안녕!!" },
        { score: 60, user_name: "임관식3", message: "담아 안녕!!" },

    ];

    const user_data = _user_data.sort((a, b) => {
        return b.score - a.score;
    });
    return (
        <div>
            <div style={{
                position: "fixed",
                top: 0,
                left: 0,
                borderBottom: "1px solid #888",
                width: "100vw",
                padding: "16px",
                background: "#fff"
            }}>
                ㅁㅁㅁㅁ 명의 사람들 중에서 당신은?
            </div>
            <div style={{ margin: "10vh 0vh" }}>
                {user_data.map((u, idx) => {
                    return (
                        <div style={{ display: "flex", border: "1px solid #888", padding: "16px", borderRadius: "16px" }}>
                            <h1>{idx + 1}등</h1>
                            <div >
                                <h3>{u.user_name}</h3>
                                <p>{u.message}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div style={{ position: "fixed", bottom: "30px", left: 0, width: "100vw" }}>
                <button onClick={() => {
                    history.push('/')
                }}>다시하기</button>
            </div>
        </div>
    )
}

export default Ranking;