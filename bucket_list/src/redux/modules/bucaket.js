// bucket.js
import { db } from '../../firebase';
import { collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc } from "firebase/firestore";


// Actions Type 지정해주기!
const LOAD = "bucket/LOAD";
const CREATE = 'bucket/CREATE';
const UPDATE = 'bucket/UPDATE';
const DELETE = 'bucket/DELETE';

//리덕스에 정보 저장 - 기본적으로 가지고 있을 값
const initilaState = {
  list: [
    { text: "영화관 가기", completed: false },
    { text: "매일 책읽기", completed: false },
    { text: "수영 배우기", completed: false },
    { text: "코딩하기", completed: false },
  ]
  // list: ["영화관 가기", "매일 책읽기", "수영 배우기", "코딩하기"],
}

// Action Creators - 정보 생성
export function loadBucket(bucket_list) {
  return { type: LOAD, bucket_list };
}
export function createBucket(bucket) {
  console.log("액션 생성!");
  return { type: CREATE, bucket: bucket };
}

// 정보 수정하기
export function updateBucket(bucket_index) {
  return { type: UPDATE, bucket_index };
}

//Action Delete -삭제하기
export function deleteBucket(bucket_index) {
  console.log("지울 버킷 인덱스", bucket_index);
  return { type: DELETE, bucket_index };
}

//middlewares
export const loadBucketFB = () => {

  // 인자로 dispatch를 받아온다. 그래야 dispatch로 액션을 일으킬수 있다.
  return async function (dispatch) {

    // getDocs는 데이터를 전부 가져온다.
    const bucket_data = await getDocs(collection(db, "bucket")); //어떤 collection에서 가져오는지. 인자로는 db(firebase.js에서 만든 것)
    console.log(bucket_data);

    let bucket_list = [];

    bucket_data.forEach((b) => {
      console.log(b.data());
      bucket_list.push({ ...b.data() });
    });

    console.log(bucket_list);

    dispatch(loadBucket(bucket_list)); //버킷리스트 수정 요청
  }
}


// Reducer - state에 정보를 바꿔 주는 역할
export default function reducer(state = initilaState, action = {}) {
  switch (action.type) {
    case "bucket/LOAD": {
      return { list: action.bucket_list }
    }
    case "bucket/CREATE": {
      console.log("값 바꾸기!");
      const new_bucket_list = [...state.list, action.bucket];
      return { list: new_bucket_list };
    }

    case "bucket/UPDATE": {
      const new_bucket_list = state.list.map((l, idx) => {
        if (parseInt(action.bucket_index) === idx) {
          return { ...l, completed: true };
        } else {
          return l;
        }
      })
      console.log({ list: new_bucket_list });
      return { list: new_bucket_list };
    }

    case "bucket/DELETE": {
      console.log(state, action);
      const new_bucket_list = state.list.filter((l, idx) => {
        return parseInt(action.bucket_index) !== idx;
      })
      return { list: new_bucket_list };
    }

    default: return state;
  }
}
