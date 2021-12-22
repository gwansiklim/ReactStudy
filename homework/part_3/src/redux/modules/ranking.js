// 랭킹 정보를 넣어준다.
// 랭킹 정보에 하나를 더 추가한다. (추가되는 정보는 퀴즈에 푼 유저 정도다.{점수, 이름, 메세지})

const ADD_RANK = "ranking/ADD_RANK";

export const addRank = (user_ranking) => {
    return { type: ADD_RANK, user_ranking };
}

const initialState = {
    ranking: [
        { score: 40, user_name: "임관식1", message: "담아 안녕!!" },
        { score: 80, user_name: "임관식2", message: "담아 안녕!!" },
        { score: 60, user_name: "임관식3", message: "담아 안녕!!" },
    ],
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "ranking/ADD_RANK": {
            const new_ranking_list = [...state.ranking, action.user_ranking];
            return { ...state, ranking: new_ranking_list };
        }
        default:
            return state;
    }
}