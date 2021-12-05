//메인 돔
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Start from './start';

function App() {
    const [name, setName] = React.useState("도담이");


    return (
        <div className="App" style={{
            maxWidth: "350px",
            margin: "auto",
        }}>
            <Start name={name} />
        </div>
    );
}

export default App;
