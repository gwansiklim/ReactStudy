import React from 'react';
import BucketList from './BucketList';
import './style.css';


// 클래스형 컴포넌트
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            list: ["넷플릭스 보기", "헬스장 가기", "스키장 가기"],
        }
    }

    render() {
        console.log(this.state.list);
        return (
            <div className="App">
                <div className="container">
                    <h1>나의 버킷리스트</h1>
                    <hr className="line" />
                    <BucketList list={this.state.list} />
                </div>

            </div>
        )
    }
}


// 함수형 컴포넌트
// function App() {
//     return (
//         <div className="App">
//             <BucketList />
//         </div>
//     );
// }

export default App;
