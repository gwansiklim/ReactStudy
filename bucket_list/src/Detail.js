//디테일 페이지
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBucket } from './redux/modules/bucaket';
import { useHistory } from 'react-router-dom';

const Detail = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();
    const bucket_index = params.index;
    const bucket_list = useSelector((state) => state.bucket.list); //리덕스에서 리스트 가져오기

    return (
        <div>
            <h1>{bucket_list[bucket_index]}</h1>
            <button onClick={() => {
                dispatch(deleteBucket(bucket_index));
                history.goBack();
            }}>삭제하기</button>
        </div>
    )
}

export default Detail;