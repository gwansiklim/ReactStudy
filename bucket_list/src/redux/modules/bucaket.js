// bucket.js

// Actions
const CREATE = 'bucket/CREATE';

const initilaState = {
    list: ["영화관 가기", "매일 책읽기", "수영 배우기"],
}

// Action Creators
export function createBucket(bucket) {
    console.log("액션 생성!");
    return { type: CREATE, bucket: bucket };
}


// Reducer
export default function reducer(state = initilaState, action = {}) {
    switch (action.type) {
        case "bucket/CREATE": {
            console.log("값 바꾸기!");
            const new_bucket_list = [...state.list, action.bucket];
            return { list: new_bucket_list };
        }
        default: return state;
    }
}
