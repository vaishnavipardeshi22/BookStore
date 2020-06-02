import React, {useEffect, useState} from 'react';
import './App.css';
import PrimarySearchAppBar from "./Component/PrimarySearchAppBar";
import CardGrid from "./Component/CardGrid";
import axios from "axios";
import CssBaseline from '@material-ui/core/CssBaseline';
import Pagination from "@material-ui/lab/Pagination";
import Typography from "@material-ui/core/Typography";
import Cart from "./Component/Cart";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

export default function App(props) {
    const [data, setData] = useState()
    const [request] = useState('showBooks')
    const [page, setPage] = React.useState(1);

    const handleChange = (event, value) => {
        setPage(value);
    };
    const [cartCount, setCartCount] = useState(0)

    const handleCart = (value) => {
        setCartCount(value);
    };


    useEffect(() => {
        axios.get('http://localhost:8080/bookStoreController/showBooks/' + props.request)
            .then((result) => {
                setData(result.data);
                console.log("received")
            });
    }, [request]);

    if (data !== undefined)
        var records = (data.length)

    return (
        <React.Fragment>
            <CssBaseline/>
            <PrimarySearchAppBar cartCount={cartCount}/>
            <main>
                <Typography variant="h6" color="inherit" noWrap style={{marginLeft: 20}}>
                    <b>Books</b>
                </Typography>
                <CardGrid data={data} cards={cards} pageNumber={page} onChange={handleCart}/>
            </main>
            <div>
                <Pagination count={Math.ceil(records / cards.length)} color="secondary" page={page}
                            onChange={handleChange}/>
            </div>
            <br/>
            <Cart/>
        </React.Fragment>
    );
}