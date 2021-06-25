import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button'
import MovieIcon from "@material-ui/icons/Movie";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "start",
    flexGrow: 1,
  },
  details: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
  },
  cover: {
    width: 266,
    minHeight: 400,
    backgroundSize: "cover",
    flexShrink: 0,
    fontSize: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  genre: {
    color: "#6c5ce7",
  },
  genreItem: {
    paddingRight: "10px",
  },

  desc: {
    marginTop: 40
  },
   cta: {
     flexBasis: "100%",
     display: "flex",
     justifyContent: "flex-end",
     alignItems: "flex-end",
      flexGrow: 1
   }
}));

function CardDetaiItem(props) {
  const classes = useStyles();

  const { name, summary, image, rating, officialSite, genres, premiered } =
    props.show;
  const imageSrc = image && image.original;
  const genreList = genres.map((item) => (
    <span className={classes.genreItem} key={item}>
      {item}
    </span>
  ));
  const date = premiered.split("-")[0];
  const rate = rating && rating.average
  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {date}
          </Typography>
          <Typography className={classes.genre} variant="body2">
            {genreList}
          </Typography>
          <Typography className={classes.rating} variant="body2">
            {rate}
          </Typography>
          <Typography dangerouslySetInnerHTML={{__html: summary}} className={classes.desc} variant="body2">
  {/*summary.replace( /(<([^>]+)>)/ig, '')*/}
          </Typography>
          {officialSite && <div className={classes.cta}><Button><a href={officialSite}>Official Site</a></Button></div>}
        </CardContent>
      </div>
      <CardMedia
        className={classes.cover}
        image={imageSrc && imageSrc}
        title="Live from space album cover"
      >
      {!imageSrc && <MovieIcon className={classes.icon} fontSize="inherit" />}
      </CardMedia>
    </Card>
  );
}

export default CardDetaiItem;
