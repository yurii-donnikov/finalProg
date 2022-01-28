import { IAction } from './../../interfaces/usersInterfaces';
import * as type from './authTypes';

interface IInitAuthState {
  isAuthenticated: boolean;
}

const initialState: IInitAuthState = {
  isAuthenticated: Boolean(localStorage.getItem('auth')),
};

const authorizationReducer = <T>(state = initialState, action: IAction<T>) => {
  switch (action.type) {
    case type.LOGIN_REQUEST:
    case type.LOGOUT_REQUEST:
      return {
        ...state,
      };

    case type.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
      };

    case type.LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
      };

    default:
      return state;
  }
};

export default authorizationReducer;
