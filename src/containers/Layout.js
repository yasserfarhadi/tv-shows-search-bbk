import { useRef, useEffect } from "react";
import { Switch, Route, useLocation, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as actions from "../redux/actions";

import { makeStyles } from "@material-ui/core/styles";

import Header from "../components/Header";
import TvShowsPage from "../pages/TvShows";
import PeoplePage from "../pages/People";
import ShowDetail from "../pages/[ShowDetail]";
import PersonDetail from '../pages/[PersonDetail]'

const useStyle = makeStyles(() => ({
  root: {
    background: "#e5e5e5",
    minHeight: "100%",
    width: "100%",
  },
}));

function Layout() {
  const thisPath = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();
  const inputRef = useRef();
  const classes = useStyle();

  useEffect(() => {
    history.listen(() => {
      if (inputRef.current) inputRef.current.firstElementChild.value = "";
    });
    dispatch(actions.setShowValue(""));
    dispatch(actions.setPeopleValue(""));
  }, [thisPath.pathname]);

  function fetchData() {
    const value = inputRef.current.firstElementChild.value
    if (thisPath.pathname === "/") {
      dispatch(actions.setShowValue(value));
      dispatch(actions.fetchShows(value));
    }
    if (thisPath.pathname === "/people") {
      dispatch(
        actions.setPeopleValue(value)
        );
        dispatch(actions.fetchPeople(value));
    }
  }
  return (
    <div className={classes.root}>
      <Header ref={inputRef} fetchData={fetchData} location={thisPath} />
      <Switch>
        <Route path="/" exact component={TvShowsPage} />
        <Route path="/people" exact component={PeoplePage} />
        <Route path="/people/:persondetail" exact component={PersonDetail} />
        <Route path="/:showetail" component={ShowDetail} />
      </Switch>
    </div>
  );
}

export default Layout;
