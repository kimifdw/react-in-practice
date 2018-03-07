import { call, put } from 'redux-saga/effects'
import { takeLatest } from 'redux-saga'

import { loginRequest, loginSuccess, loginFailure } from '../actions'

import { login as loginService } from '../../services/user'

export function * login ({ payload: { username, password } }) {
  try {
    const res = yield call(loginService, username, password)
    yield put(loginSuccess(res.data.data))
  } catch (error) {
    yield put(loginFailure())
  }
}

export function * watchLogin () {
  yield takeLatest(loginRequest, login)
}

export default [ watchLogin() ]
