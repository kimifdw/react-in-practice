import { createActions, createAction } from 'redux-actions'
import {
  LOGIN_REQUEST, LOGIN_FAILURE, LOGIN_SUCCESS,
  UPDATE_PROFILE_REQUEST, UPDATE_PROFILE_FAILURE, UPDATE_PROFILE_SUCCESS,
  LOGOUT
} from '../types'

const defaultState = { isFetching: false, fullName: null, email: null, phoneNumber: null, avatar: null }

const { loginRequest, loginFailure, loginSuccess } = createActions({
  [LOGIN_REQUEST]: (username, password) => ({ username, password, isFetching: true }),
  [LOGIN_FAILURE]: () => ({ ...defaultState }),
  [LOGIN_SUCCESS]: (payload) => ({ ...payload, isFetching: false })
})

const { updateProfileRequest, updateProfileFailure, updateProfileSuccess } = createActions({
  [UPDATE_PROFILE_REQUEST]: () => ({ isFetching: true }),
  [UPDATE_PROFILE_FAILURE]: () => ({ ...defaultState }),
  [UPDATE_PROFILE_SUCCESS]: (payload) => ({ ...payload, isFetching: false })
})

const logout = createAction(LOGOUT, () => {
  return { ...defaultState }
})

export {
  loginRequest, loginFailure, loginSuccess,
  updateProfileRequest, updateProfileFailure, updateProfileSuccess,
  logout
}
