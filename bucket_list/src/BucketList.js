import React from 'react';
import styled from 'styled-components';

// 함수형 콤포넌트 사용방법
const BucketList = ({ list }) => {
    const my_lists = list;
    const my_wrap = React.useRef(null);


    window.setTimeout(() => {
        console.log(my_wrap);
    }, 1000);
    return (
        <div ref={my_wrap}>
            {
                my_lists.map((list, index) => {
                    // console.log(list);
                    return (<ItemStyle key={index}>{list}</ItemStyle>);
                })
            }
        </div>
    );
}

const ItemStyle = styled.div`
    padding: 16px;
    margin: 8px;
    background-color: aliceblue;
`;

export default BucketList;