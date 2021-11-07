import logo from './logo.svg';
import React from 'react';
import './App.css';

function App() {
    const styles = {
        border: "1px solid gray",
        borderRadius: "20px",
        padding: "20px",
        width: "300px",
        margin: "30px auto"
    };

    return (
        <div className="App">
            <div style={styles}>
                <h1 style={{ color: "green" }}>안녕하세요!</h1>
                <hr />
                <p style={{ textAlign: "left" }}>이름을 입력해주세요.</p>
                <input type="text" style={{ width: "80%" }} />
            </div>

        </div>
    );
}

export default App;
