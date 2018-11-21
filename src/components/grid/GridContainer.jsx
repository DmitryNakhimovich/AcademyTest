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
  const addStyle = classNameDop ?
    classNames({
      [" " + classNameDop]: true
    })
    : null;

  return (
    <Grid
      container
      className={addStyle ? classes.row + addStyle : classes.row}
      {...rest}
    >
      {children}
    </Grid>
  );
}

export default withStyles(style)(GridContainer);
