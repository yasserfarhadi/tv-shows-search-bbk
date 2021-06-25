import React, { useState, forwardRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  button: {
    padding: 0,
  },
  navLink: {
    textDecoration: "none",
    color: "#555",
    display: "block",
    width: "100%",
    height: "100%",
    textAlign: "center",
    padding: "10px 20px",
    boxSizing: "border-box",
    borderBottom: "2px solid white",
  },
  active: {
    boxSizing: "border-box",
    borderBottom: "2px solid #555",
  },
  appBar: {
    background: "#e5e5e5",
  },
  container: {
    width: "1200px",
    margin: "0 auto",
    minHeight: "34px",
  },
  appBarRow: {
    display: "flex",
  },
  navbar: {
    background: "white",
    minHeight: "44px",
  },
  grow: {
    flexGrow: 1,
  },
  title: {
    width: "180px",
    flexShrink: 0,
    display: "block",
    color: "#555",
    fontWeight: "bold",
  },
  search: {
    position: "relative",
    display: "flex",
    color: "#555",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.5),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.75),
    },
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(3),
    width: "auto",
    [theme.breakpoints.up("lg")]: {
      marginLeft: theme.spacing(3),
      width: "550px",
    },
  },
  searchBtn: {
    zIndex: 1,
  },
  searchIcon: {
    height: "100%",
    position: "absolute",
    pointerEvents: "cursor",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    right: 0,
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "300px",
    },
    [theme.breakpoints.up("md")]: {
      width: "400px",
    },
    [theme.breakpoints.up("lg")]: {
      width: "500px",
    },
  },
}));

const setTitle = pathname => {
  if(pathname === "/") return "TV Shows Search" 
  if(pathname === "/people") return "Paople Search" 
  if(pathname.startsWith("/people/")) return "People Detail"
  if(pathname.startsWith("/")) return "TV Show Detail"
}

function Header({ fetchData, location }, ref) {
  const classes = useStyles();

  function getData() {
    fetchData();
  }
  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar className={classes.appBar}>
          <div className={classes.container}>
            <div className={classes.appBarRow}>
              <Typography className={classes.title} variant="h6" noWrap>
                {setTitle(location.pathname)}
              </Typography>
              { location.pathname === "/" || location.pathname === "/people" ?
                <div className={classes.search}>
                <InputBase
                  ref={ref}
                  placeholder={`Search for ${
                    location.pathname === "/" ? "TV Shows" : "People"
                  }`}
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ "aria-label": "search" }}
                />
                <div className={classes.searchIcon}>
                  <Button onClick={getData} className={classes.searchBtn}>
                    <SearchIcon />
                  </Button>
                </div>
              </div> : null}
            </div>
          </div>
        </Toolbar>
        <Toolbar className={classes.navbar}>
          <div className={classes.container}>
            <Button className={classes.button}>
              <NavLink
                activeClassName={classes.active}
                className={classes.navLink}
                to="/"
                exact
              >
                TV SHOWS
              </NavLink>
            </Button>
            <Button className={classes.button}>
              <NavLink
                activeClassName={classes.active}
                className={classes.navLink}
                to="/people"
              >
                PEOPLE
              </NavLink>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const forwardedHeader = forwardRef(Header);

export default forwardedHeader;
