// 한마디 하기 페이지
import React from 'react';
import dam from './mypet.png';

import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { setMessage } from './redux/modules/user'
import { addRank } from './redux/modules/ranking';

const Message = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const message_ref = React.useRef(null);

    const user_name = useSelector(state => state.user.user_name);
    const quiz_name = useSelector(state => state.quiz.quiz_name);

    const quiz_list = useSelector(state => state.quiz.quiz_list);
    const user_answer_list = useSelector(state => state.quiz.user_answer_list);
    const _score = (100 / quiz_list.length) * quiz_list.filter((q, idx) => {
        return q.answer === user_answer_list[idx];
    }).length;

    // 질문 평균 점수 구하기!
    const score = Math.round(_score);

    return (
        <div>
            <img src={dam} />
            <h3>{quiz_name}에게 남기는 한마디</h3>
            <input ref={message_ref} />
            <button onClick={() => {
                dispatch(setMessage(message_ref.current.value));
                dispatch(addRank({ score: score, user_name: user_name, message: message_ref.current.value, }));

                history.push('/ranking');
            }}>남기고 랭킹 보러가기</button>
        </div>
    )
}

export default Message;