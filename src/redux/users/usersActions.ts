import * as type from './usersTypes';

interface IAction<T> {
  type: string;
  payload?: T;
}

export const fetchUserRequest = <T>(data?: T): IAction<T> => ({
  type: type.FETCH_USER_REQUEST,
  payload: data,
});

export const fetchUserSuccess = <T>(data: T): IAction<T> => ({
  type: type.FETCH_USER_SUCCESS,
  payload: data,
});

export const fetchUserError = <T>(data: T): IAction<T> => ({
  type: type.FETCH_USER_ERROR,
  payload: data,
});

export const fetchLotUsersSuccess = <T>(data: T): IAction<T> => ({
  type: type.FETCH_LOT_USERS_SUCCESS,
  payload: data,
});
