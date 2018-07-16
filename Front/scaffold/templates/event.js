import { delay } from "redux-saga";
import { put, call } from "redux-saga/effects";

/*
* Evento basico
*
* Versión 1.0
* Fecha de creación {{Date}} 
* Creado por {{Author}} 
*/

/**
 * Interfaz para ejecutar el evento
 */
export default function* saga{{ComponentName}}(action) {
  yield call(delay, 1000);
  yield put({ type: "INCREMENT" });
}

export const TYPE_EVENT = '@@event/{{ComponentName}}';


