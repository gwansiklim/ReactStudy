import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import Start from './Start';
import Quiz from './Quiz';
import Score from './Score';
import Message from './Message';
import Ranking from './Ranking';


function App() {
    const [name, setName] = React.useState("도담이");

    return (

        <div className="App" style={{
            maxWidth: "350px",
            margin: "auto"
        }}>
            <Route path="/" exact>
                <Start name={name} />
            </Route>
            <Route path="/quiz" exact>
                <Quiz />
            </Route>
            <Route path="/score" exact>
                <Score name={name} />
            </Route>
            <Route path="/message" exact>
                <Message />
            </Route>
            <Route path="/ranking" exact>
                <Ranking />
            </Route>
        </div>
    );
}

export default App;
