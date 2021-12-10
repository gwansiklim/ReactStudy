// bucket.js

// Actions Type 지정해주기!
const CREATE = 'bucket/CREATE';
const DELETE = 'bucket/DELETE';

//리덕스에 정보 저장
const initilaState = {
    list: ["영화관 가기", "매일 책읽기", "수영 배우기", "코딩하기"],
}

// Action Creators - 정보 생성
export function createBucket(bucket) {
    console.log("액션 생성!");
    return { type: CREATE, bucket: bucket };
}
//Action Delete -삭제하기
export function deleteBucket(bucket_index) {
    console.log("지울 버킷 인덱스", bucket_index);
    return { type: DELETE, bucket_index };
}

// Reducer - state에 정보를 바꿔 주는 역할
export default function reducer(state = initilaState, action = {}) {
    switch (action.type) {
        case "bucket/CREATE": {
            console.log("값 바꾸기!");
            const new_bucket_list = [...state.list, action.bucket];
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
