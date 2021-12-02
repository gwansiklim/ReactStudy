import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 3,
        };
    }

    componentDidMount() { }

    addNemo = () => {
        this.setState({ count: this.state.count + 1 });
    }
    removeNemo = () => {
        if (this.state.count > 0) {
            this.setState({ count: this.state.count - 1 })
        } else {
            window.alert("네모가 없어요!")
        }

    }

    render() {
        const nemo_count = Array.from({ length: this.state.count }, (v, i) => i);

        console.log(this.state);
        return (
            <div className="App">
                {nemo_count.map((n, i) => {
                    return (
                        <div
                            key={i}
                            style={{
                                width: "150px",
                                height: "150px",
                                backgroundColor: "#ddd",
                                margin: "10px",
                            }}>
                            nemo
                        </div>
                    )
                }
                )}

                <div>
                    <button onClick={this.addNemo}>추가하기</button>
                    <button onClick={this.removeNemo}>지우기</button>
                </div>
            </div>
        )
    }
}

export default App;
