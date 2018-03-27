import { handleActions } from 'redux-actions'
import {
  LOGIN_REQUEST, LOGIN_FAILURE, LOGIN_SUCCESS
  // UPDATE_PROFILE_REQUEST, UPDATE_PROFILE_FAILURE, UPDATE_PROFILE_SUCCESS,
  // LOGOUT
} from '../types'

const defaultState = {
  isFetching: false,
  fullName: null,
  email: null,
  phoneNumber: null,
  avatar: null,
  isAuthenticated: false
}

const reducer = handleActions({
  [LOGIN_REQUEST] (state) {
    return { ...state, isFetching: true }
  },
  [LOGIN_SUCCESS] (state, { payload }) {
    return { ...state, ...payload, isFetching: false, isAuthenticated: true }
  },
  [LOGIN_FAILURE] (state) {
    return { ...defaultState, isAuthenticated: false }
  }
}, defaultState)

export default reducer
