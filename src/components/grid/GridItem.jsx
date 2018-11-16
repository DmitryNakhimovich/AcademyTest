import React from "react";
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
  const { classes, children, ...rest } = props;

  return (
    <Grid item {...rest} className={classes.col}>
      {children}
    </Grid>
  );
}

export default withStyles(style)(GridItem);
