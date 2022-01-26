import { put, call, takeLatest } from 'redux-saga/effects';
import fetchUsers from '../../services/api/apiUsers';
import { IUser } from './../../interfaces/usersInterfaces';
import {
  fetchUsersError,
  fetchUsersSuccess,
  fetchMoreUsersSuccess,
} from './usersActions';
import * as type from './usersTypes';

interface IParams {
  type: string;
  payload?: {
    page: number;
    results: number;
  };
}

function* fetchUsersWorker({ payload }: IParams): Generator {
  try {
    const users = (yield call(fetchUsers, payload)) as IUser[];

    if (payload) {
      yield put(fetchMoreUsersSuccess(users));
    } else {
      yield put(fetchUsersSuccess(users));
    }
  } catch (error) {
    yield put(fetchUsersError(error));
  }
}

export function* usersWatcher() {
  yield takeLatest(type.FETCH_USERS_REQUEST, fetchUsersWorker);
}
