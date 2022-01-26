import { all } from 'redux-saga/effects';
import { authWatcher } from './auth/authSagas';
import { usersWatcher } from './users/usersSagas';

export function* rootSaga() {
  yield all([usersWatcher(), authWatcher()]);
}
