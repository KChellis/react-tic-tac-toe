import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/Game';
import { AppContainer } from 'react-hot-loader';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

const store = createStore();

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <HashRouter>
        <Provider store={store}>
          <Component/>
        </Provider>
      </HashRouter>
    </AppContainer>,
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
