import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// mui core
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "../components/grid/GridContainer";
import GridItem from "../components/grid/GridItem";
// container
import { containerFixed } from "../assets/jss/material-kit-react.jsx";

const styles = theme => ({
  containerFixed,
  root: {
    textAlign: "center",
    paddingTop: theme.spacing.unit * 20
  }
});

class Index extends React.Component {
  state = {
    open: false
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };
  handleClick = () => {
    this.setState({
      open: true
    });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.containerFixed}>
        <GridContainer>
          <GridItem xs={12}>
            <div className={classes.root}>
              <Dialog open={open} onClose={this.handleClose}>
                <DialogTitle>Super Secret Password</DialogTitle>
                <DialogContent>
                  <DialogContentText>1-2-3-4-5</DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button color="primary" onClick={this.handleClose}>
                    OK
                  </Button>
                </DialogActions>
              </Dialog>
              <Typography variant="h4" gutterBottom>
                Material-UI
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                example project
              </Typography>
              <Button variant="contained" color="secondary" onClick={this.handleClick}>
                Super Secret Password
              </Button>
              <Button variant="contained" color="primary" component={Link} to="/about">
                Go to About page
              </Button>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Index);
