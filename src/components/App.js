import React, { PureComponent } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
// core components
import withRoot from "./utils/withRoot";
import withStore from "./utils/withStore";
// styles
import "../assets/css/main.css"
// routes
import indexRoutes from "../routes/index.js";

const hist = createBrowserHistory();

class App extends PureComponent {
  render() {
    return (
      <Router history={hist}>
        <Switch>
          {indexRoutes.map((prop, key) => {
            return <Route
              path={prop.path}
              component={prop.component}
              key={key}
            />;
          })}
        </Switch>
      </Router>
    );
  }
}

export default withStore(withRoot(App));
