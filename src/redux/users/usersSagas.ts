import { put, call, takeLatest } from 'redux-saga/effects';
import { IUser } from './../../interfaces/usersInterfaces';
import { fetchUserError, fetchUserSuccess, fetchLotUsersSuccess,} from './usersActions';
import * as type from './usersTypes';
import fetchUsers from '../../api/apiUsers';

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
      yield put(fetchLotUsersSuccess(users));
    } else {
      yield put(fetchUserSuccess(users));
    }
  } catch (error) {
    yield put(fetchUserError(error));
  }
}

export function* usersWatcher() {
  yield takeLatest(type.FETCH_USER_REQUEST, fetchUsersWorker);
}
