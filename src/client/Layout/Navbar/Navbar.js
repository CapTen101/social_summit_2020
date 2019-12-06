import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Button, Fab } from "@material-ui/core";
import { Facebook, Twitter, Instagram } from "@material-ui/icons";
import MenuDrawer from "./Drawer";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    background: "transparent",
    width: "100vw",
    "@media (max-width:780px)": {
      width: "100vw"
    }
  },
  appBar: {
    position: "absolute",
    padding: " 10px",
    background: "transparent",
    boxShadow: "none",
    "@media (max-width:780px)": {
      width: "1vw"
    }
  },
  stickyAppBar: {
    background: "black",
    position: "fixed"
  },

  button: {
    background: "#000",
    marginEnd: "20px",
    ":hover&": {
      background: "#00a650"
    },
    "@media (max-width:780px)": {
      display: "none"
    }
  },
  fab: {
    margin: theme.spacing(1),
    background: "#000",
    ":hover&": {
      background: "#00a650"
    },
    "@media (max-width:780px)": {
      display: "none"
    }
  },
  logo: {
    flexGrow: 1,
    height: "90px",
    marginLeft: "-70%",
    marginRight: theme.spacing(1),
    "@media (min-width:1300px) and (max-width:1400px)": {
      marginLeft: "-60%"
    },
    "@media (min-width:1405px) and (max-width:1450px)": {
      marginLeft: "-62.5%"
    },
    "@media (min-width:700px) and (max-width:800px)": {
      height: "45px",
      width: "auto",
      paddingRight: "75vw"
    },
    "@media (min-width:500px) and (max-width:600px)": {
      height: "45px",
      width: "auto",
      paddingRight: "67.5vw"
    },
    "@media (min-width:365px) and (max-width:420px)": {
      height: "45px",
      width: "auto",
      paddingRight: "55vw"
    },
    "@media (min-width:320px) and (max-width:360px)": {
      height: "45px",
      width: "auto",
      paddingRight: "50vw"
    },
    "@media (max-width:320px)": {
      height: "45px",
      width: "auto",
      paddingRight: "42.5vw"
    }
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY > 100;
      const nav = document.getElementById("nav");
      if (isTop) {
        nav.classList.add("stickyAppBar");
      } else {
        nav.classList.remove("stickyAppBar");
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div className={classes.root}>
      <AppBar id="nav" position="static" className={classes.appBar}>
        <Toolbar>
          <img
            className={classes.logo}
            src="/Images/Logo_Main.svg"
            alt="logo"
          />
          <Button color="inherit" className={classes.button}>
            Register
          </Button>
          <Button color="inherit" className={classes.button}>
            Login
          </Button>

          <Fab
            size="small"
            color="primary"
            aria-label="add"
            className={classes.fab}
          >
            <Facebook />
          </Fab>

          <Fab
            size="small"
            color="primary"
            aria-label="add"
            className={classes.fab}
          >
            <Twitter />
          </Fab>
          <Fab
            size="small"
            color="primary"
            aria-label="add"
            className={classes.fab}
          >
            <Instagram />
          </Fab>
          <MenuDrawer />
        </Toolbar>
      </AppBar>
    </div>
  );
}
