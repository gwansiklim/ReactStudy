//디테일 페이지
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Detail = (props) => {
    const params = useParams();
    const bucket_index = params.index;
    const bucket_list = useSelector((state) => state.bucket.list); //리덕스에서 리스트 가져오기

    console.log(bucket_list);
    console.log(bucket_index);
    return (
        <h1>{bucket_list[bucket_index]}</h1>
    )
}

export default Detail;