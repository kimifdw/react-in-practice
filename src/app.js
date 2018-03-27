import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import configStore from './store'

import Router from './router'

const App = () => (
  <Provider store={configStore()}>
    <Router />
  </Provider>
)

ReactDOM.render(
  <App />,
  document.getElementById('app')
)

if (module.hot) {
  module.hot.accept()
}
