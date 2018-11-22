import { connect } from 'react-redux';
import { find } from 'lodash';
import { fetchPost } from '../redux/actions';
import NewsDetail from '../views/NewsDetail';

const mapStateToProps = (state, ownProps) => {
  const { match: { params: { id } } } = ownProps;
  const post = find(state.posts.items, { id });

  return { id, post };
};

const mapDispatchToProps = dispatch => ({
  fetchPost: (id) => dispatch(fetchPost(id)),
});

const wrapper = connect(mapStateToProps, mapDispatchToProps);
const NewsDetailContainer = wrapper(NewsDetail);
export default NewsDetailContainer;
