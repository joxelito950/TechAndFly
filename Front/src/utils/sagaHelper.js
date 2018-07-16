import { call, put } from 'redux-saga/effects';

export const SHOW_ERROR = "@@http/saga/SHOW_ERROR";
export const REQUEST_START =  "@@http/saga/REQUEST_START";
export const REQUEST_SUCCESS = "@@http/saga/REQUEST_SUCCESS";

export function* invoke(service, ...args) {
  try {
    yield put(requestStart());
    const response = yield call(service, ...args);
    yield put(requestSuccess());
    return response;
  } catch (error) {
    yield put(requestSuccess());
    yield put(showError(getError(error.message)));
  }
}

export function* invokeWithAction(service, successAction, ...args) {
  try {
    yield put(requestStart());
    const response = yield call(service, ...args);
    yield put(successAction);
    yield put(requestSuccess());
    return response;
  } catch (error) {
    yield put(requestSuccess());
    yield put(showError(getError(error.message)));
  }
}

function getError(error) {
  if (error instanceof TypeError) {
    return 'Error en la red, contacte con su administrador';
  }

  return error.message ? error.message : error;
}

function action(type, data) {
  return { type, ...data };
}

export const showError = (message) => action(SHOW_ERROR, { message });
export const requestStart = () => action(REQUEST_START);
export const requestSuccess = () => action(REQUEST_SUCCESS);
