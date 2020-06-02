import React from 'react';
import './App.css';
import PrimarySearchAppBar from "./Component/PrimarySearchAppBar";
import ComplexGrid from "./Component/ComplexGrid";
import AddressForm from "./Component/AddressForm";
import Checkout from "./Component/Checkout";
import SimpleExpansionPanel from "./Component/SimpleExpansionPanel";

function App() {
    return (
        <div className="App">
            <PrimarySearchAppBar/>
            <ComplexGrid/>
            <SimpleExpansionPanel>
                <Checkout>
                    <AddressForm/>
                </Checkout>
            </SimpleExpansionPanel>
        </div>
    );
}

export default App;
