import React from "react";
import PropTypes from "prop-types";
import { NavLink } from 'react-router-dom'
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
import Button from "@material-ui/core/Button";
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
// page routes
import pagesRoutes from "../../routes/pages.js";

import logoImg from "../../assets/img/artezio.logo";

const headerStyle = theme => ({
  headerToolbar: {
    alignItems: 'inherit',
    minHeight: '50px',
  },
  headerLogo: {
    display: 'flex',
    alignItems: 'center',
  },
  logoImg: {
    height: '40px',
    width: 'auto',
  },
  headerNavWrap: {
    position: 'relative',
    width: '100%',
  },
  headerMobileNavWrap: {
    marginLeft: 'auto',
  },
  headerLinks: {
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
  },
  linksList: {
    display: 'flex',
    padding: 0,
    height: '100%'
  },
  linksListItem: {
    width: 'auto',
  },
  activeLinkItem: {
    background: 'rgba(0, 0, 0, 0.14)'
  },
  headerAuth: {
    display: 'flex',
    position: 'absolute',
    top: 0,
    right: 0,
    height: '100%',
    alignItems: 'center',
  }
});

function Header({ ...props }) {
  const { classes } = props;

  const headerLogo = (
    <div className={classes.headerLogo}>
      <Button href="#" color="inherit" className={classes.logoImageWrap}>
        <img src={logoImg} alt="Академия Artezio" className={classes.logoImg} />
      </Button>
    </div>
  );
  const navLinksList = (
    <List
      className={classes.linksList}
      component="nav"
    >
      {pagesRoutes.map((prop, key) => (
        <ListItem
          button
          key={key}
          component={NavLink}
          to={prop.path}
          exact
          className={classes.linksListItem}
          activeClassName={classes.activeLinkItem}
        >
          <ListItemText
            disableTypography
            primary={
              <Typography
                variant="subtitle1"
                style={{ color: '#fff' }}>
                {prop.name}
              </Typography>
            }
          />
        </ListItem>
      ))}
    </List>
  );
  const desktopNavMenu = (
    <Hidden smDown implementation="css" className={classes.headerNavWrap}>
      <div className={classes.headerLinks}>
        {navLinksList}
      </div>
      <div className={classes.headerAuth}>
        <Button variant="contained" color="secondary">Войти</Button>
      </div>
    </Hidden>
  );
  const mobileNavMenu = (
    <Hidden mdUp implementation="css" className={classes.headerMobileNavWrap}>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={props.handleDrawerToggle}
      >
        <Menu />
      </IconButton>

      <SwipeableDrawer
        variant="temporary"
        anchor="left"
        open={props.open}
        onClose={props.handleDrawerToggle}
        onOpen={props.handleDrawerToggle}
      >
        <div className={classes.sideLinks}>
          {navLinksList}
        </div>
        <Divider />
        <div className={classes.sideAuth}>
          <Button variant="contained" color="secondary">Войти</Button>
        </div>
      </SwipeableDrawer>
    </Hidden>
  );

  return (
    <AppBar className={classes.headerAppBar}>
      <Toolbar className={classes.headerToolbar}>
        {headerLogo}
        {desktopNavMenu}
        {mobileNavMenu}
      </Toolbar>
    </AppBar>
  );
};


Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(headerStyle)(Header);
