import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Progress = (props) => {
    const quiz_list = useSelector(state => state.quiz.quiz_list)
    const user_answer_list = useSelector(state => state.quiz.user_answer_list);

    return (
        <ProgressBar>
            <HighLight width={(user_answer_list.length / quiz_list.length) * 100 + "%"}></HighLight>
            <Dot></Dot>
        </ProgressBar>
    )
}
const ProgressBar = styled.div`
    background: #eee;
    width: 100%;
    height: 20px;
    display: flex;
    align-items: center;
    border-radius: 10px;
    margin-top: 25px
`;

const HighLight = styled.div`
    background: #e2432e;
    transition: 1s;
    width: ${(props) => props.width};
    height: 20px;
`;

const Dot = styled.div`
width: 30px;
height: 30px;
background: #fff;
border: 5px solid #e2432e;
border-radius: 30px;
margin: 0px 0px 0px -20px; 
`

export default Progress;