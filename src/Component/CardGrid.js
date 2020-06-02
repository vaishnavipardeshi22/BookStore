import React, {useEffect, useState} from 'react';
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import {MuiThemeProvider} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import BookData from "./BookData";
import axios from "axios";

const theme = createMuiTheme({
    palette: {
        secondary: {
            main: '#8B0000'
        }
    },
});

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        boxShadow: 'none',
        border: "thin solid #8B0000",
    },
    button: {
        width: '50%',
        border: "thin solid #8B0000",
        padding: 0,
        boxShadow: 'none',
        height: 30,
        textAlign: 'center',
    }
}));

export default function CardGrid(props) {
    const classes = useStyles();

    const [cart, setCart] = useState(1)

    const addBook = (value) => {
        axios.post('http://localhost:8080/cartController/addToCart', {bookId: value, quantity: 1})
            .then((results) => {
                setCart(cart + 1)
            });
    }

    useEffect(() =>{
        axios.get('http://localhost:8080/cartController/getBooksInCart' + props.request)
            .then((result)=>{props.onChange(result.data.length)});
    }, [cart])

    return (
        <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={3}>
                {props.cards.map((card, i) => <Grid item key={card} xs={12} sm={6} md={3}>
                    <Card className={classes.card}>
                        <BookData num={card+props.cards.length*(props.pageNumber-1)-1} data={props.data}/>
                        <CardActions>
                            <MuiThemeProvider theme={theme}>
                                <Button size={"large"} variant={"contained"} color={"secondary"}
                                        style={{background:"#8B0000"}} className={classes.button} onClick={addBook.bind(this, card + props.cards.length * (props.pageNumber - 1))}>
                                    <Typography variant={"caption"}>
                                        ADD TO CART
                                    </Typography>
                                </Button>
                                <Button size={"large"} className={classes.button}>
                                    <Typography variant={"caption"}>
                                        WISHLIST
                                    </Typography>
                                </Button>
                            </MuiThemeProvider>
                        </CardActions>
                    </Card>
                </Grid>)}
            </Grid>
        </Container>
    )
}