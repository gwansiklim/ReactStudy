import React from 'react';
import BucketList from './BucketList';
import './style.css';
import styled from 'styled-components';


// 클래스형 컴포넌트
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            list: ["넷플릭스 보기", "헬스장 가기", "스키장 가기"],
        }

        this.text = React.createRef();
    }

    componentDidMount() {
        console.log(this.text);
    }

    render() {
        // console.log(this.text.current);
        return (
            <div className="App">
                <Container>
                    <Title>나의 버킷리스트</Title>
                    <Line />
                    <BucketList list={this.state.list} />
                </Container>

                <div>
                    <input type="text" ref={this.text}
                        onChange={() => {
                            console.log(this.text.current.value);
                        }} />
                </div>
            </div>
        )
    }
}


//함수형 컴포넌트
// function App() {
//     return (
//         <div className="App">
//             <BucketList />
//         </div>
//     );
// }

const Container = styled.div`
    background-color: #fff;
    width: 50vw;
    max-width: 350px;
    margin: auto;
    height: 80vh;
    padding: 16px;
    border: 1px solid #ddd;
    border-radius: 10px;
`;
const Title = styled.h1`
    color: slateblue;
    text-align: center;
`;

const Line = styled.hr`
    margin: 16px 0px;
`;

export default App;
