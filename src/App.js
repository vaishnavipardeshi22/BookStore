import React from 'react';
import logo from './logo.svg';
import './App.css';
import PrimarySearchAppBar from "./Component/PrimarySearchAppBar";
import ComplexGrid from "./Component/ComplexGrid";

function App() {
    return (
        <div className="App">
            <PrimarySearchAppBar/>
            <ComplexGrid/>
        </div>
    );
}

export default App;
