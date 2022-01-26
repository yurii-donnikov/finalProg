import { IAction, IInitStateReducer } from './../../interfaces/usersInterfaces';
import * as type from './usersTypes';

const initialState: IInitStateReducer = {
  users: [],
  error: null,
};

const usersReducer = <T>(state = initialState, action: IAction<T>) => {
  switch (action.type) {
    case type.FETCH_USERS_REQUEST:
      return { ...state };

    case type.FETCH_USERS_SUCCESS:
      return { ...state, users: action.payload, error: null };

    case type.FETCH_USERS_ERROR:
      return { ...state, error: action.payload };

    case type.FETCH_MORE_USERS_SUCCESS:
      return {
        ...state,
        users: [...state.users, ...action.payload],
        error: null,
      };

    default:
      return state;
  }
};

export default usersReducer;
