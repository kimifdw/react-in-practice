import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers'
import sagas from './sagas'

const loggerMiddleware = createLogger()
const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose

export default function configStore () {
  const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(...[sagaMiddleware, loggerMiddleware])
  ))
  sagaMiddleware.run(sagas)
  return store
}
