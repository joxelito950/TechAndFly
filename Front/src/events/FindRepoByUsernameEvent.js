import { put, call } from 'redux-saga/effects';
import { invoke } from '../utils/sagaHelper';
import api from '../api';
/*
* Evento basico
*
* Versión 1.0
* Fecha de creación 2018-06-28 
* Creado por admin 
*/

/**
 * Interfaz para ejecutar el evento
 */
export default function* sagaFindRepoByUsername({ username }) {
  try {
    const repos = yield call(invoke, api.getRepoByUsername, username);
    yield put({ type: REPO_FIENDED, repos });
  } catch (err) {
    console.error(erro);
  }
}

export const TYPE_EVENT = '@@event/FindRepoByUsername';
export const REPO_FIENDED = '@@event/FindRepoByUsername/REPO_FIENDED';
