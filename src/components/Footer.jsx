import React from "react";

import {
    makeStyles,
    Typography
} from "@material-ui/core";

const useStyles = makeStyles({
   Footer: {
       background: "#228B22",
       display: "flex",
       justifyContent: "center",
       alignItems: "center",
       padding: 16
   },
    FooterText: {
       color: "#fff"
    }
});

const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.Footer}>
            <Typography
                className={classes.FooterText}
                variant={"body1"}
            >
                All Rights Reserved &copy; DigiLand 2019
            </Typography>
        </div>
    )
}

export default Footer;
