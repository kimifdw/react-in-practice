import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import configStore from './store'

import Router from './router'

ReactDOM.render(
  <Provider store={configStore()}>
    <Router />
  </Provider>,
  document.getElementById('app')
)
