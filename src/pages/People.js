import React, {useEffect} from "react";
import { useHistory, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import * as actions from '../redux/actions'

import Typography from "@material-ui/core/Typography";

import PersonCardItem from "../components/PersonCardItem";

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

function People() {
  const state = useSelector((state) => state.people);
  const classes = useStyle();
  const history = useHistory();
  const location = useLocation()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actions.fetchPeople());
  }, [])
  function cardDetail(item) {
    history.push({
      pathname: `${location.pathname}/${item.person.name}`,
      item,
    });
  }
  const cardItem = state.data.map((item) => {
    const { name, country, image, id, birthday } = item.person;
    return (
      <div key={id} className={classes.item}>
        <PersonCardItem
          clicked={() => cardDetail(item)}
          title={name}
          country={country && country.name}
          birthday={birthday}
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

export default People;
