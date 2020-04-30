import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import OtherPage from "./OtherPage";
import Fib from "./Fib";

function App() {
    return (
        <Router>
            <div className="App">

                <h1>Welcome to Fib calculator</h1>
                <Link to="/">Home</Link> | <Link to="/otherpage">Other Page</Link>

                <Route exact path="/" component={Fib}/>
                <Route exact path="/otherpage" component={OtherPage}/>
            </div>
        </Router>
    );
}

export default App;
