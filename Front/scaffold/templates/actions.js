/*
* Archivos de acciones para {{ComponentName}}
*
* Versión 1.0
* Fecha de creación {{Date}} 
* Creado por {{Author}} 
*/

import { DUMMY_ACTION } from './actionType';
import reduxHelper from '../../utils/reduxHelper';

const reduxUtil = reduxHelper('{{ComponentName}}');

// Crear todas las acciones aquí
const actions = {
  dummyAction: payload => reduxUtil.createAction(DUMMY_ACTION)(payload)
};

export default actions;
