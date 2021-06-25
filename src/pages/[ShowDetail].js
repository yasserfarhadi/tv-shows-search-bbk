import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

import CardDetailItem from "../components/CardDetaiItem";

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
  const [show, setShow] = useState(null);
  useEffect(() => {
    if (location.item) {
      setShow(location.item.show);
    } else {
      fetch(
        `http://api.tvmaze.com/singlesearch/shows?q=${location.pathname.slice(
          1
        )}`
      )
        .then((res) => res.json())
        .then(setShow);
    }
  }, []);
  const classes = useStyle();
  return (
    <div className={classes.container}>
      {show && <CardDetailItem show={show} />}
    </div>
  );
}

export default ShowDetail;
