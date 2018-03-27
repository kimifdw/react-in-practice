import { createActions, createAction } from 'redux-actions'
import {
  LOGIN_REQUEST, LOGIN_FAILURE, LOGIN_SUCCESS,
  UPDATE_PROFILE_REQUEST, UPDATE_PROFILE_FAILURE, UPDATE_PROFILE_SUCCESS,
  LOGOUT
} from '../types'

const { loginRequest, loginFailure, loginSuccess } = createActions({
  [LOGIN_REQUEST]: (username, password) => ({ username, password }),
  [LOGIN_FAILURE]: undefined,
  [LOGIN_SUCCESS]: payload => ({ ...payload })
})

const { updateProfileRequest, updateProfileFailure, updateProfileSuccess } = createActions({
  [UPDATE_PROFILE_REQUEST]: payload => ({ ...payload }),
  [UPDATE_PROFILE_FAILURE]: undefined,
  [UPDATE_PROFILE_SUCCESS]: payload => ({ ...payload })
})

const logout = createAction(LOGOUT, () => {
  return { fullName: null, email: null, phoneNumber: null, avatar: null }
})

export {
  loginRequest, loginFailure, loginSuccess,
  updateProfileRequest, updateProfileFailure, updateProfileSuccess,
  logout
}
