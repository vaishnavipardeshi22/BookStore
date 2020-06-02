import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from "@material-ui/core/Button";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 600,
        marginTop: theme.spacing(6),
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

export default function ComplexGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                            <img className={classes.img} alt="complex"
                                 src="http://books.google.com/books/content?id=GHt_uwEACAAJ&printsec=frontcover&img=1&zoom=5"/>
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs justify={"flex-start"}>
                                <Typography variant="body2" component="h2" align={"left"}>
                                    The Girl In Room
                                </Typography>
                                <Typography variant={"caption"} color="textSecondary" display="block" align={"left"}>
                                    Chetan Bhagat
                                </Typography>
                                <Typography variant={"caption"} color="textSecondary" display="block" align={"left"}>
                                    Rs 193
                                </Typography>
                                <br/>
                                <Grid item direction={"row"} justify={"flex-start"} spacing={10}>
                                    <Typography align={"left"} variant="body2">
                                        <AddCircleOutlineIcon fontSize={"large"} color={"primary"}/>
                                        <CheckBoxOutlineBlankIcon fontSize={"large"} color={"disabled"}/>
                                        <RemoveCircleOutlineIcon fontSize={"large"} color={"secondary"}/>
                                        <Typography align={"center"}>
                                            Remove
                                        </Typography>
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid>
                                <Typography align={"right"}>
                                    <Button variant="contained" color="secondary" href="#contained-buttons">
                                        place order
                                    </Button>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}
