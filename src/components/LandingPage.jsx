import React, { Component } from 'react';
import NavBar from './common/Nav';
import Button from '@material-ui/core/Button';
import '../assets/styles/landing.scss';
import { withStyles } from "@material-ui/core/styles";
import ContentCard from './common/Card';
import Footer from './Footer';

const useStyles = theme => ({
  Button: {
    background: "#228B22",
    color: "#fff",
    padding: "10px 25px",
    "&:hover": {
      background: "#7ec0ee"
    } 
  },
  ButtonArea: {
    display: "flex",
    justifyContent: "center",
    paddingTop: 50,

  }
})

class LandingPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <NavBar />
        <div className="body-container">
          <div className="body-container__header">
            <h3 className="body-container__header__title">Digital Land Forum</h3>
            <p className="body-container__header__para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
               Ut enim ad minim veniam, quis nostrud exercitation ullamco 
               laboris nisi ut aliquip ex ea commodo consequat. </p>
            <div className={classes.ButtonArea}>
              <Button  className={classes.Button}>Register</Button>
            </div>
          </div>
        </div>
        <div className="body-container__cards">
          <ContentCard />
          <ContentCard />
          <ContentCard />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    )
  }
}

export default  withStyles(useStyles)(LandingPage);