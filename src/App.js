import React from 'react';
import logo from './logo.svg';
import './App.css';
import PrimarySearchAppBar from "./Component/PrimarySearchAppBar";
import Function from "./Component/Function";

function App() {
    return (
        <div className="App">
            <PrimarySearchAppBar/>
            <Function/>
        </div>
    );
}

export default App;
