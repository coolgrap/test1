import createBrowserHistory from 'history/createBrowserHistory';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import App from './containers/App/App';
import reducers from './reducers';

const history = createBrowserHistory();
const store = createStore(reducers, applyMiddleware(thunk));

const render = (Component: any) => {
  ReactDOM.render(
    <AppContainer>
      <Component store={store} history={history}/>
    </AppContainer>,
    document.querySelector('#root'),
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./containers/App/App', () => render(App));
  module.hot.accept('./reducers', () => {
    const nextReducer = require('./reducers');
    return store.replaceReducer(nextReducer);
  });
}
