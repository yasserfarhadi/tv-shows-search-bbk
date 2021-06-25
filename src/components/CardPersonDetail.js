import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import PersonIcon from "@material-ui/icons/Person";

const useStyles = makeStyles(() => ({
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
    alignItems: "center",
  },
  genre: {
    color: "#6c5ce7",
  },
  genreItem: {
    paddingRight: "10px",
  },

  desc: {
    marginTop: 40,
  },
  cta: {
    flexBasis: "100%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    flexGrow: 1,
  },
}));

function CardPersonDetail(props) {
  const classes = useStyles();

  const { name, image, birthday, deathday, country } = props.person;
  const imageSrc = image && image.original;
  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {country && country.name}
          </Typography>
          <Typography className={classes.genre} variant="body2">
            {birthday ? birthday : "Not Specified"} - {deathday ? deathday : "Present"}
          </Typography>
        </CardContent>
      </div>
      <CardMedia
        className={classes.cover}
        image={imageSrc && imageSrc}
        title="Live from space album cover"
      >
        {!imageSrc && <PersonIcon className={classes.icon} fontSize="inherit" />}
      </CardMedia>
    </Card>
  );
}

export default CardPersonDetail;
