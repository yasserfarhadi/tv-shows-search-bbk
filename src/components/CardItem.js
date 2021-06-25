import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import MovieIcon from "@material-ui/icons/Movie";

const useStyles = makeStyles({
  root: {
    width: 160,
    borderRadius: 0,
    height: "100%",
  },
  action: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: 'flex-start'
  },
  media: {
    height: 260,
    width: "100%",
    fontSize: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  content: {
    flexBasis: "100%"
  },
  title: {
    fontSize: "16px",
    fontWeight: "bold",
  },
  rating: {
    fontSize: "12px",
  },
});
function CardItem(props) {
  const { clicked, title, mediumImg, rating } =
    props;
  const classes = useStyles();
  return (
    <Card className={classes.root} onClick={clicked}>
      <CardActionArea className={classes.action}>
        <CardMedia
          className={classes.media}
          image={mediumImg && mediumImg}
          title={title}
        >
        {!mediumImg && <MovieIcon className={classes.icon} fontSize="inherit" />}
        </CardMedia>
        <CardContent>
          <Typography
            className={classes.title}
            gutterBottom
            variant="h6"
            component="h5"
          >
            {title}
          </Typography>
          <Typography
            className={classes.rating}
            gutterBottom
            variant="body2"
            component="p"
          >
            Rating: {rating ? rating : "Not Rated"}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardItem;
