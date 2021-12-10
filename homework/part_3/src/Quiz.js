import React, { useState } from 'react';
import dam from './mypet.png';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addAnswer } from "./redux/modules/quiz";

const Quiz = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const quiz_list = useSelector(state => state.quiz.quiz_list);
    const user_answer_list = useSelector(state => state.quiz.user_answer_list);

    //문제 만들기 - 리덕스 만들기 전
    // const quiz_list = [
    //     { question: "담이는 1살이다", answer: true, },
    //     { question: "담이는 2살이다", answer: false },
    //     { question: "담이는 3살이다", answer: false, }
    // ];

    //user_answer_list는 질문 번호, setAnswerList는 변화할 때(고칠 떄) 사용 React.useState([])초기값을 빈배열로 준다. -리덕스 만들기 전
    // const [user_answer_list, setAnswerList] = React.useState([]);


    // O,X를 클릭 시 이벤트 발생
    const setAnswer = (user_answer) => {
        dispatch(addAnswer(user_answer));
        // 리덕스 만들기 전
        // setAnswerList([...user_answer_list, user_answer]); 
        // history.push("/score") //score로 경로 이동
    };


    // React.useEffect(1,2) - 1번에 실행할 것이나 함수, 2번은 무엇이 변했을 때 1번을 실행할 것인지.
    // O,X 퀴즈를 다 하면 score페이지로 이동
    React.useEffect(() => {
        if (user_answer_list.length === quiz_list.length) {

            // const _score = (100 / quiz_list.length) * quiz_list.filter((q, idx) => {
            //     return q.answer === user_answer_list[idx];
            // }).length;

            // // 질문 평균 점수 구하기!
            // const score = Math.round(_score);
            // console.log(_score, score);
            history.push("/score");
            return;
        }
    }, [user_answer_list]);

    if (user_answer_list.length === quiz_list.length) {
        return null;
    }

    return (
        <div>
            <p>{user_answer_list.length + 1}번 문제</p>
            <h3>{quiz_list[user_answer_list.length].question}</h3>  {/* 질문마다 quiz_list에서 question만 가져온다 */}

            <img src={dam} />

            <div>
                <button onClick={() => {
                    setAnswer(true);
                }} style={{
                    width: "50px",
                    height: "50px",
                    margin: "16px"
                }}>O</button>
                <button onClick={() => {
                    setAnswer(false);
                }} style={{
                    width: "50px",
                    height: "50px",
                    margin: "16px"
                }}>
                    X</button>
            </div>
        </div>
    )
}

export default Quiz;