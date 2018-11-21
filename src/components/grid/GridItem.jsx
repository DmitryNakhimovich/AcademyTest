import React from "react";
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";

const style = {
  col: {
    position: "relative",
    padding: "0 15px",
    width: "100%",
    minHeight: "1px",
    flexBasis: "auto"
  }
};

function GridItem({ ...props }) {
  const { classes, children, classNameDop, ...rest } = props;
  const addStyle = classNameDop ?
    classNames({
      [" " + classNameDop]: true
    })
    : null;

  return (
    <Grid
      item
      className={addStyle ? classes.col + addStyle : classes.col}
      {...rest}
    >
      {children}
    </Grid>
  );
}

export default withStyles(style)(GridItem);
