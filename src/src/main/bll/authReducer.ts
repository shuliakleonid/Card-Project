import {AuthActionsTypes, AuthEnum} from './auth-actions'

const initialState = {
  name: null as string | null,
  _id: null as string | null,
  avatar: null as string | null,
  isLoading: false,
  isAuth: false,
  isRegister: false
}

export type AuthStateType = typeof initialState

export const authReducer = (state: AuthStateType = initialState, action: AuthActionsTypes): AuthStateType => {
  switch (action.type) {
    case AuthEnum.LOGIN:
      return {...state, ...action.payload}
    case AuthEnum.LOGOUT:
      return {...state, name: null, _id: null, avatar: null}
    case AuthEnum.UPDATE_USER:
      return {...state, ...action.payload}
    case AuthEnum.IS_LOADING:
      return {...state, ...action.payload}
    case AuthEnum.IS_AUTH:
      return {...state, ...action.payload}
    case AuthEnum.IS_REGISTER:
      return {...state, ...action.payload}
    default:
      return state
  }
}