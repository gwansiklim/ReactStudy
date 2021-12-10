// 1.어떤 데이터를 넣을지 -> 퀴즈목록/ 유저 정답 목록
// 2. 어떻게 수정 할 것인지. -> 유저가 선택한 OX 정답을 목록에 추가.


// 1. 데이터 넣는 방법
const ADD_ANSWER = 'quiz/ADD_ANSWER';

export const addAnswer = (user_answer) => {
    return { type: ADD_ANSWER, user_answer }; // user_answer는 유저가 OX중 고른것을 말한다.
}

const initialState = {
    quiz_list: [
        { question: "담이는 1살이다", answer: true, },
        { question: "담이는 2살이다", answer: false },
        { question: "담이는 3살이다", answer: false, }
    ],
    user_answer_list: [],
}


// 2. 수정하는 방법
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "quiz/ADD_ANSWER": {
            console.log(action);
            const new_user_answer_list = [...state.user_answer_list, action.user_answer];
            console.log(new_user_answer_list);
            return { ...state, user_answer_list: new_user_answer_list };
        }

        default: return state;
    }
}