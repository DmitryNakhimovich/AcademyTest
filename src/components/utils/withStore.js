import React from "react";
import { Provider } from 'react-redux';
import store from '../../redux/store';

function withStore(Component) {
  function WithStore(props) {
    return (
      <Provider store={store}>
        <Component {...props} />
      </Provider>
    );
  }

  return WithStore;
}

export default withStore;
