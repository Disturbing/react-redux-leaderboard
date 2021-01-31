import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { ThemeProvider } from 'theme-ui'
import theme from './theme'

import App from './App';
import setupSocket from './sockets'
import reducers from './reducers'
import handleBoost from './sagas'
import username from './utils/name'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
)

const socket = setupSocket(store.dispatch, username)

sagaMiddleware.run(handleBoost, {socket, playerName: username})

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
