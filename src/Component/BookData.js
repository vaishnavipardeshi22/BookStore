import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import React from "react";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({

    cardMedia: {
        paddingTop: '60%',
        width: '40%',
        marginTop: 15,
        marginBottom: 15,
        marginLeft: '50%',
        transform: 'translate(-50%)',
    },
    mediaContainer: {
        backgroundColor: '#f2f2f2',
        boxShadow: 'none',
        borderRadius: 0
    },
    cardContent: {
        height: 70,
        flexGrow: 0,
    },

    price: {
        padding: 0,
        margin: 0,
        fontWeight: 'bold',
    }
}));

export default function CardData(data) {
    const classes = useStyles();
    let title;
    let author;
    let price;
    let image;
    if (data.data !== undefined && data.num < data.data.length) {
        author = data.data[data.num].author
        title = data.data[data.num].title
        price = "Rs. " + data.data[data.num].price
        image = data.data[data.num].image
    }
    return (
        <div>
            <Card className={classes.mediaContainer}>
                <CardMedia
                    className={classes.cardMedia}
                    image={image}
                    title="Image title"
                />
            </Card>
            <CardContent className={classes.cardContent}>
                <Typography variant="body2" component="h2">
                    {title}
                </Typography>
                <Typography variant={"caption"} color="textSecondary" display="block">
                    {author}
                </Typography>
                <Typography variant={"caption"} className={classes.price}>
                    {price}
                </Typography>
            </CardContent>
        </div>
    );
}