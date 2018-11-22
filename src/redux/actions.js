import faker from 'faker';

const {
  date: { past, recent },
  lorem: { paragraph, paragraphs, words },
  random: { uuid, number, image },
  image: { technics }
} = faker;

// action constants
export const FETCH_POSTS = 'FETCH_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

// generate a list of recent dates sorted in ascending order
const recentDates = Array(50)
  .fill()
  .map(() => recent())
  .sort((date1, date2) => {
    if (date1 > date2) return 1;
    if (date1 < date2) return -1;
    return 0;
  });

export const receivePosts = (count = 1, options = {}) => {
  const posts = Array(count)
    .fill()
    .map(() => {
      const summary = paragraph();
      return {
        id: options.id || uuid().split('-')[0],
        title: words(),
        summary,
        content: `${summary}\n${paragraphs()}`,
        date: recentDates.pop() || past(),
        image: "https://picsum.photos/800/800/?image=" + number() % 100 //image()
      };
    });

  return {
    type: RECEIVE_POSTS,
    posts,
  };
};

const POST_COUNT = 5;
export const fetchPosts = () => {
  return dispatch => {
    // emulate api request
    setTimeout(() => dispatch(receivePosts(POST_COUNT)), 1000);
  };
};

export const fetchPost = (id) => {
  return dispatch => {
    // emulate api request
    setTimeout(() => dispatch(receivePosts(1, { id })), 1000);
  };
};
