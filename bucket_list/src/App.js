import React from 'react';
import BucketList from './BucketList';
import styled, { ThemeConsumer } from 'styled-components';


// 클래스형 컴포넌트 사용방법
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            list: ["넷플릭스 보기", "헬스장 가기", "스키장 가기"],
        }

        this.text = React.createRef(); //ref를 만드는 명령어
    }

    componentDidMount() {
    }

    addBucket = () => {
        console.log(this.text.current.value);
        const new_item = this.text.current.value;
        this.setState({ list: [...this.state.list, new_item] });
    }

    render() {
        // console.log(this.text.current);
        return (
            <AppWrap>
                <Container>
                    <Title>나의 버킷리스트</Title>
                    <Line />
                    <BucketList list={this.state.list} />
                </Container>

                <InputWrap>
                    <input type="text" ref={this.text} />
                    <button onClick={this.addBucket}>추가하기</button>
                </InputWrap>
            </AppWrap>
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

const AppWrap = styled.div`
    background-color: #eee;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
`;

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

const InputWrap = styled.div`
    background-color: #fff;
    width: 50vw;
    max-width: 350px;
    margin: auto;
    padding: 16px;
    border: 1px solid #ddd;
    border-radius: 10px;
`;

export default App;
