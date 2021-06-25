import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

import CardPersonDetail from "../components/CardPersonDetail";

const useStyle = makeStyles(() => ({
  container: {
    width: "1200px",
    margin: "0 auto",
    display: "flex",
    padding: "70px 150px 0",
  },
}));

function ShowDetail() {
  const location = useLocation();
  const [person, setPerson] = useState(null);
  useEffect(() => {
    if (location.item) {
      setPerson(location.item.person);
    } else {
      fetch(
        `http://api.tvmaze.com/search/people?q=${location.pathname.slice(
          8
        )}`
      )
        .then((res) => res.json())
        .then(data => setPerson(data[0].person));
    }
  }, []);
  const classes = useStyle();
  return (
    <div className={classes.container}>
      {person && <CardPersonDetail person={person} />}
    </div>
  );
}

export default ShowDetail;
