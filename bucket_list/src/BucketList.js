// 리액트 패키지를 불러옵니다.
import React from "react";
import styled from "styled-components";
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BucketList = (props) => {
    const history = useHistory();
    // console.log(props);
    // const my_lists = props.list;
    const my_lists = useSelector((state) => state.bucket.list); // 리덕스에 액션을 추가하는 방법.

    return (
        <ListStyle>
            {my_lists.map((list, index) => {
                return (
                    <ItemStyle completed={list.completed} className="list_item" key={index} onClick={() => {
                        history.push("/detail/" + index); // 디테일주소에 paramse 붙이기
                    }}>
                        {list.text}
                    </ItemStyle>
                );
            })}
        </ListStyle>
    );
};

const ListStyle = styled.div`
display: flex;
flex-direction: column;
height: 50vh;
overflow-x: hidden;
overflow-y: auto;
max-height: 50vh;
`;

const ItemStyle = styled.div`
padding: 16px;
margin: 8px;
color: ${(props) => props.completed ? "#fff" : "#333"};
background-color: ${(props) => props.completed ? "#673ab7;" : "aliceblue"};
`;

export default BucketList;