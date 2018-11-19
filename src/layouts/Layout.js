/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import withRoot from "../components/utils/withRoot.js";
import Header from "../components/common/Header.js";
import Footer from "../components/common/Footer.js";
// routing
import pagesRoutes from "../routes/pages.js";

const layoutStyle = theme => ({
  pageWrapper: {},
  pageScroller: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    minHeight: "100vh",
    top: 0
  },
  pageMain: {
    flex: "1 0 auto",
    paddingTop: "56px"
  }
});

const switchRoutes = (
  <Switch>
    {pagesRoutes.map((prop, key) => {
      if (prop.redirect)
        return <Redirect from={prop.path} to={prop.to} key={key}/>;
      return <Route exact={prop.exact} path={prop.path} component={prop.component} key={key}/>;
    })}
  </Switch>
);

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mobileOpen: false
    };

    this.resizeFunction = this.resizeFunction.bind(this);
  }

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  resizeFunction() {
    if (window.innerWidth >= 960) {
      this.setState({ mobileOpen: false });
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.resizeFunction);
  }

  componentDidUpdate(e) {
    if (e.history.location.pathname !== e.location.pathname) {
      this.refs.pageScroller.scrollTop = 0;
      if (this.state.mobileOpen) {
        this.setState({ mobileOpen: false });
      }
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resizeFunction);
  }

  render() {
    const { classes, ...rest } = this.props;

    return (
      <div className={classes.pageWrapper}>
        <div className={classes.pageScroller} ref="pageScroller">
          <Header
            routes={pagesRoutes}
            open={this.state.mobileOpen}
            handleDrawerToggle={this.handleDrawerToggle}
            {...rest}
          />

          <main className={classes.pageMain}>
            {switchRoutes}
          </main>

          <Footer {...rest} />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(layoutStyle)(App));
