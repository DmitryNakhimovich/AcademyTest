import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import classNames from 'classnames';
// mui core
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from "@material-ui/core/Typography";
// plugins
import moment from 'moment';
import locale_ru from "moment/locale/ru";
import Image from 'material-ui-image'
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
  card: {
    marginBottom: "5rem"
  },
  newsPreloader: {
    paddingTop: "3rem",
    paddingBottom: "3rem",
    textAlign: "center"
  },
  imageWrap: {
    objectFit: 'cover',
    transitionDuration: '0.5s, 0.75s, 0.3s',
    height: "auto",
    maxHeight: "400px",
  },
  imagePic: {},
});

moment.locale("ru", locale_ru);

class NewsDetail extends PureComponent {

  componentDidMount() {
    const { fetchPost, id, post } = this.props;
    if (!post) {
      fetchPost(id);
    }
  }

  _renderPreloader = () => {
    const { classes } = this.props;
    return (
      <GridItem xs={12} classNameDop={classes.newsPreloader}>
        <CircularProgress size={80} thickness={4}/>
      </GridItem>
    );
  };

  _renderPost = () => {
    const { classes } = this.props;
    const { title, date, content, image } = this.props.post;

    return (
      <GridItem xs={12}>
        <Typography gutterBottom variant="h2" component="h1">
          {title}
        </Typography>
        <Typography component="p">
          <time dateTime={date}>{moment(date).fromNow()}</time>
        </Typography>
        <Image
          className={classes.media}
          src={image}
          alt={title}
          aspectRatio={(2)}
          imageStyle={classes.imageWrap}
          style={{}}
          loading={
            <CircularProgress size={50} thickness={3}/>
          }
        />
        <Typography variant="body1" component="p">
          {content}
        </Typography>
      </GridItem>
    );
  };

  render() {
    const { classes, ...rest } = this.props;

    return (
      <div className={classes.containerFixed}>
        <GridContainer classNameDop={classes.root}>
          {this.props.post ? this._renderPost() : this._renderPreloader()}
        </GridContainer>
      </div>
    );
  }
}

NewsDetail.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NewsDetail);
