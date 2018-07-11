import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/Game';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import rootReducer from './reducers/index';

const store = createStore(rootReducer);

const render = (Component) => {
  ReactDOM.render(
    <HashRouter>
      <Provider store={store}>
        <Component/>
      </Provider>
    </HashRouter>,
    document.getElementById('react-app-root')
  );
};

render(Game);

/*eslint-disable */
if (module.hot) {
  module.hot.accept(require('./components/Game'), () => {
    render(Game);
  });
}
/*eslint-enable */
