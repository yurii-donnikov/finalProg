import { loginSuccess, logoutSuccess } from './authActions';
import { put, takeLatest } from 'redux-saga/effects';
import * as type from './authTypes';

function* loginWorker() {
  const auth = localStorage.getItem('auth');
  try {
    if (!auth) {
      localStorage.setItem('auth', 'authorized');
    }
    yield put(loginSuccess());
  } catch (error) {
    return error;
  }
}

function* logoutWorker() {
  try {
    yield put(logoutSuccess());
  } catch (error) {
    return error;
  }
}

export function* authWatcher() {
  yield takeLatest(type.LOGIN_REQUEST, loginWorker);
  yield takeLatest(type.LOGOUT_REQUEST, logoutWorker);
}
