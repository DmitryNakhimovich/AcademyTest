import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// mui core
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
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
    padding: "5rem 0"
  },
  card: {},
  media: {},
  actionsWrapper: {
    justifyContent: "flex-end"
  }
});

class About extends React.Component {
  state = {};

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.containerFixed}>
        <GridContainer>
          <GridItem xs={12}>
            <div className={classes.root}>
              <Card className={classes.card} elevation={4}>
                <CardMedia
                  className={classes.media}
                  component="img"
                  image={require("../assets/img/about.png")}
                  alt="Факты о компании"
                  title="Факты о компании"
                />
                <CardActions className={classes.actionsWrapper}>
                  <Button
                    size="small"
                    color="primary"
                    href="http://artezio.ru/company"
                  >
                    Узнать больше об Artezio
                  </Button>
                </CardActions>
              </Card>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

About.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);
