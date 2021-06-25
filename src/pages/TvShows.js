import React, {useEffect} from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import Typography from "@material-ui/core/Typography";

import CardItem from "../components/CardItem";

import * as actions from '../redux/actions'

const useStyle = makeStyles(() => ({
  container: {
    width: "1200px",
    margin: "0 auto",
    paddingTop: "70px",
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
  },
  item: {
    marginBottom: "20px",
  },
  title: {
    gridColumn: "-8/8",
    marginBottom: "20px"
  }
}));

function TvShows() {
  const state = useSelector((state) => state.shows);
  const classes = useStyle();
  const history = useHistory();
const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actions.fetchShows());
  }, [])

  function cardDetail(item) {
    history.push({
      pathname: `/${item.show.name}`,
      item,
    });
  }

  const cardItem = state.data.map((item) => {
    const { name, rating, image, id } = item.show;
    return (
      <div key={id * Math.random()} className={classes.item}>
        <CardItem
          clicked={() => cardDetail(item)}
          title={name}
          rating={rating.average}
          mediumImg={image && image.medium}
        />
      </div>
    );
  });
  return <div className={classes.container}>
  {state.searchValue && <div className={classes.title}><Typography>Search Result For <b>{state.searchValue}</b></Typography></div>}
  {cardItem}
  </div>;
}

export default TvShows;
