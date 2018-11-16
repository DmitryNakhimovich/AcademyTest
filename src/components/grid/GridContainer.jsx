import React from "react";
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";

const style = {
  row: {
    position: "relative",
    margin: "0 -15px",
    width: "auto"
  }
};

function GridContainer(props) {
  const { classes, children, classNameDop, ...rest } = props;
  var addStyle = classNames({
    [" " + classNameDop]: true
  });

  return (
    <Grid
      container
      className={classes.row + addStyle}
      {...rest}
    >
      {children}
    </Grid>
  );
}

export default withStyles(style)(GridContainer);
