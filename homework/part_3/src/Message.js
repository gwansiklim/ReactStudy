// 한마디 하기 페이지
import React from 'react';
import dam from './mypet.png';
import { useHistory } from 'react-router-dom';

const Message = (props) => {
    const history = useHistory();
    return (
        <div>
            <img src={dam} />
            <h3>누구누구에게 남기는 한마디</h3>
            <input />
            <button onClick={() => {
                history.push('/ranking');
            }}>남기고 랭킹 보러가기</button>
        </div>
    )
}

export default Message;