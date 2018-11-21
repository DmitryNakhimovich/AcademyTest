import { connect } from 'react-redux';
import { fetchPosts } from '../redux/actions';
import News from '../views/News';

const mapStateToProps = state => {
  const { posts: { isFetching, items } } = state;

  return {
    isLoading: isFetching,
    posts: items,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
});

const wrapper = connect(mapStateToProps, mapDispatchToProps);
const NewsContainer = wrapper(News);
export default NewsContainer;
