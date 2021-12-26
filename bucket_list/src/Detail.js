//디테일 페이지
import React from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBucket, deleteBucketFB, updateBucketFB } from './redux/modules/bucaket';

import Button from '@material-ui/core/Button';

const Detail = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();
  const bucket_index = params.index;
  const bucket_list = useSelector((state) => state.bucket.list); //리덕스에서 리스트 가져오기

  return (
    <div>
      <h1>{bucket_list[bucket_index] ? bucket_list[bucket_index].text : ""}</h1>
      <Button
        variant="outlined" color="primary"
        onClick={() => {
          // dispatch(updateBucket(bucket_index));
          dispatch(updateBucketFB(bucket_list[bucket_index].id));
        }}>완료하기</Button>
      <Button variant="outlined" color="secondary" onClick={() => {
        dispatch(deleteBucketFB(bucket_list[bucket_index].id));
        history.goBack();
      }}>삭제하기</Button>
    </div>
  )
}

export default Detail;