import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import classNames from 'classnames';
// mui core
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Icon from '@material-ui/core/Icon';
// core components
import GridContainer from "../components/grid/GridContainer";
import GridItem from "../components/grid/GridItem";
import Image from 'material-ui-image'
// container
import { containerFixed } from "../assets/jss/material-kit-react.jsx";

const styles = theme => ({
  containerFixed,
  root: {
    padding: "5rem 0"
  },
  card: {},
  media: {},
  icon: {
    width: "auto",
  },
  actionsWrapper: {
    justifyContent: "space-between"
  },
  iconButton: {
    margin: "0 4px"
  }
});

class About extends React.Component {
  state = {};

  render() {
    const { classes } = this.props;
    const socialData = [
      {
        title: "Почта",
        href: "mailto:academy@artezio.com",
        iconClass: 'fa fa-envelope'
      },
      {
        title: "Вконтакте",
        href: "https://www.vk.com/artezio",
        iconClass: 'fab fa-vk'
      },
      {
        title: "Facebook",
        href: "https://www.facebook.com/Artezio.ru",
        iconClass: 'fab fa-facebook-f'
      },
      {
        title: "Twitter",
        href: "https://twitter.com/artezio",
        iconClass: 'fab fa-twitter'
      },
      {
        title: "Instagram",
        href: "https://www.instagram.com/arteziosoftware/",
        iconClass: 'fab fa-instagram'
      },
    ];

    return (
      <div className={classes.containerFixed}>
        <GridContainer>
          <GridItem xs={12}>
            <div className={classes.root}>
              <Card className={classes.card} elevation={4}>
                <Image
                  className={classes.media}
                  src={require("../assets/img/about.png")}
                  alt="Факты о компании Artezio"
                  title="Факты о компании Artezio"
                  aspectRatio={(3 / 4)}
                  imageStyle={{ objectFit: 'cover' }}
                />
                <CardActions className={classes.actionsWrapper}>
                  <div className={classes.actionsLeft}>
                    {socialData.map(social =>
                      <Button
                        className={classes.iconButton}
                        variant="fab"
                        mini
                        color="primary"
                        href={social.href}
                        title={social.title}
                      >
                        <Icon
                          className={classNames(classes.icon, social.iconClass)}
                          fontSize="small"
                        />
                      </Button>
                    )}
                  </div>
                  <div className={classes.actionsRight}>
                    <Button
                      size="small"
                      color="primary"
                      href="http://artezio.ru/company"
                    > Узнать больше об Artezio </Button>
                  </div>
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
