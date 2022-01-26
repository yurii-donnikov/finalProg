import * as type from './usersTypes';

interface IAction<T> {
  type: string;
  payload?: T;
}

export const fetchUsersRequest = <T>(data?: T): IAction<T> => ({
  type: type.FETCH_USERS_REQUEST,
  payload: data,
});

export const fetchUsersSuccess = <T>(data: T): IAction<T> => ({
  type: type.FETCH_USERS_SUCCESS,
  payload: data,
});

export const fetchUsersError = <T>(data: T): IAction<T> => ({
  type: type.FETCH_USERS_ERROR,
  payload: data,
});

export const fetchMoreUsersSuccess = <T>(data: T): IAction<T> => ({
  type: type.FETCH_MORE_USERS_SUCCESS,
  payload: data,
});
