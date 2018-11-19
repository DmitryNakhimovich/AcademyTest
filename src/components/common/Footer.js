import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
// core components
import GridContainer from "../grid/GridContainer";
import GridItem from "../grid/GridItem";
// page routes
import pagesRoutes from "../../routes/pages.js";

import { containerFluid } from "../../assets/jss/material-kit-react.jsx";

const footerStyle = theme => ({
  containerFluid,
  footerWrapper: {
    background: "#c8ccd6"
  },
  companyAbout: {
    padding: "15px 0"
  },
  linksListItem: {
    display: "inline-block",
    width: "auto",
    padding: "10px 12px"
  },
  activeLink: {
    backgroundColor: "rgba(0, 0, 0, 0.14);"
  }
});

function Footer({ ...props }) {
  const { classes } = props;
  const navLinksList = (
    <List className={classes.linksList}>
      {pagesRoutes.map((prop, key) => (
        <ListItem
          key={key}
          className={classes.linksListItem}
          disableGutters
        >
          <Button
            component={NavLink}
            exact
            to={prop.path}
            activeClassName={classes.activeLink}
          >
            {prop.name}
          </Button>
        </ListItem>
      ))}
    </List>
  );

  return (
    <AppBar
      component="footer"
      position="relative"
      className={classes.footerWrapper}
    >
      <Toolbar
        className={classes.containerFluid}
        style={{ padding: "0 24px" }}
      >
        <GridContainer>
          <GridItem xs={12} md={3}>
            <Typography variant="subtitle2" className={classes.companyAbout}>
              &copy; Artezio, {" "}{1900 + new Date().getYear()}{" "}
            </Typography>
          </GridItem>
          <GridItem xs={12} md={6}>
            {navLinksList}
          </GridItem>
        </GridContainer>
      </Toolbar>
    </AppBar>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(footerStyle)(Footer);
