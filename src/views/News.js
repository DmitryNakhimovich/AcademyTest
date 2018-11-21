import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import classNames from 'classnames';
// mui core
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from '@material-ui/core/CircularProgress';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
// plugins
import Waypoint from 'react-waypoint';
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
  }
});

moment.locale("ru", locale_ru);

class News extends React.Component {
  state = {};

  render() {
    const { classes, fetchPosts, isLoading, posts } = this.props;

    return (
      <div className={classes.containerFixed}>
        <GridContainer classNameDop={classes.root}>
          {/* posts */}
          {posts.map(({ id, title, image, summary, date }, key) => (
            <GridItem xs={12} key={key}>
              <Card className={classes.card} elevation={4}>
                <Image
                  className={classes.media}
                  src={image}
                  alt={title}
                  aspectRatio={(1)}
                  imageStyle={{
                    objectFit: 'cover',
                    transitionDuration: '0.5s, 0.75s, 0.3s',
                  }}
                  style={{
                    height: "400px",
                    paddingTop: "0"
                  }}
                  loading={
                    <CircularProgress size={50} thickness={3}/>
                  }
                />
                <CardActionArea
                  component={Link}
                  to={`/news/${id}`}
                >
                  <CardContent component="article">
                    <Typography component="p">
                      <time dateTime={date}>{moment(date).fromNow()}</time>
                    </Typography>
                    <Typography gutterBottom variant="h4" component="h2">
                      {title}
                    </Typography>
                    <Typography variant="body1" component="p">
                      {summary}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </GridItem>
          ))}

          {/* waypoint */}
          <GridItem xs={12}>
            {!isLoading && <Waypoint onEnter={fetchPosts}/>}
          </GridItem>

          {/* progress */}
          <GridItem xs={12} classNameDop={classes.newsPreloader}>
            <CircularProgress size={80} thickness={4}/>
          </GridItem>

        </GridContainer>
      </div>
    );
  }
}

News.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(News);
