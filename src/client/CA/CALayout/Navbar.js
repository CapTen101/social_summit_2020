import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import { AppBar, Toolbar, Fab } from "@material-ui/core";
import { Facebook, Twitter, Instagram, LinkedIn } from "@material-ui/icons";
import MenuDrawer from "../../Layout/Navbar/Drawer";
import Fade from "react-reveal/Fade";
import SignedInLink from "./SignedInLink";
import SignedOutLink from "./SignedOutLink";
import { connect } from "react-redux";

const styles = theme => ({
  root: {
    flexGrow: 1,
    background: "transparent",
    width: "100vw",
    "@media (max-width:780px)": {
      width: "100vw"
    }
  },
  appBar: {
    padding: " 10px",
    boxShadow: "none",
    "@media (max-width:780px)": {
      position: "absolute",
      background: "transparent"
    }
  },
  fab: {
    margin: "10px",
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
    marginLeft: "-60%",
    "@media (min-width:1300px) and (max-width:1400px)": {
      marginLeft: "-52%"
    },
    "@media (min-width:1405px) and (max-width:1450px)": {
      marginLeft: "-55%"
    },
    "@media (min-width:700px) and (max-width:800px)": {
      height: "45px",
      width: "auto",
      paddingRight: "75vw"
    },
    "@media (min-width:500px) and (max-width:600px)": {
      height: "45px",
      width: "auto",
      marginLeft: "-80%"
    },
    "@media (min-width:365px) and (max-width:420px)": {
      height: "45px",
      width: "auto",
      marginLeft: "-64%"
    },
    "@media (min-width:320px) and (max-width:360px)": {
      height: "45px",
      width: "auto",
      marginLeft: "-63%"
    },
    "@media (max-width:320px)": {
      height: "45px",
      width: "auto"
    }
  },
  PositionFixed: {
    right: 550,
    left: "auto !important",
    top: "0 !important"
  }
});

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth
    };
  }
  render() {
    const { classes, auth, profile } = this.props;
    const links = auth.uid ? (
      <SignedInLink profile={profile} />
    ) : (
      <SignedOutLink />
    );
    return (
      <div className={classes.root}>
        {this.state.width > 768 ? (
          <AppBar
            style={{
              position: "relative",
              background: "black",
              transition: "0.5s ease-in"
            }}
            className={classes.appBar}
          >
            <Toolbar>
              <Fade>
                <img
                  className={classes.logo}
                  src="/Images/Logo_Main.svg"
                  alt="logo"
                />
              </Fade>
              <Fade bottom>{links}</Fade>

              <Fade bottom>
                <Fab
                  href="https://www.facebook.com/iitrsocialsummit/"
                  target="_blank"
                  size="medium"
                  color="primary"
                  aria-label="add"
                  className={classes.fab}
                >
                  <Facebook fontSize="large" />
                </Fab>
              </Fade>
              <Fade bottom>
                <Fab
                  href="https://www.instagram.com/iitrsocialsummit/"
                  target="_blank"
                  size="medium"
                  color="primary"
                  aria-label="add"
                  className={classes.fab}
                >
                  <Instagram fontSize="large" />
                </Fab>
              </Fade>
              <Fade bottom>
                <Fab
                  href="https://www.linkedin.com/company/national-social-summit/?originalSubdomain=in"
                  target="_blank"
                  size="medium"
                  color="primary"
                  aria-label="add"
                  className={classes.fab}
                >
                  <LinkedIn fontSize="large" />
                </Fab>
              </Fade>
              <Fade bottom>
                <Fab
                  href="https://twitter.com/natsocialsummit"
                  target="_blank"
                  size="medium"
                  color="primary"
                  aria-label="add"
                  className={classes.fab}
                >
                  <Twitter fontSize="large" />
                </Fab>
              </Fade>
              <Fade bottom>
                <MenuDrawer />
              </Fade>
            </Toolbar>
          </AppBar>
        ) : (
          // for mobile version without scrolling effect
          <AppBar
            style={{
              position: "relative",
              background: "black",
              transition: "0.5s ease-in"
            }}
            className={classes.appBar}
          >
            <Toolbar>
              <img
                className={classes.logo}
                src="/Images/Logo_Main.svg"
                alt="logo"
              />
              <Fade bottom>{links}</Fade>
              <MenuDrawer />
            </Toolbar>
          </AppBar>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps)(withStyles(styles)(Navbar));