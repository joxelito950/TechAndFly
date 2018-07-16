/*
* Archivos para definer las constantes para  {{ComponentName}}
*
* Versión 1.0
* Fecha de creación {{Date}} 
* Creado por {{Author}} 
*/
import reduxHelper from '../../utils/reduxHelper';

const reduxUtil = reduxHelper('{{ComponentName}}');

// Se define las acciones
export const DUMMY_ACTION = reduxUtil.defineAction('DUMMY_ACTION');
export const SHOW_ACTION = reduxUtil.defineAction('SHOW_ACTION');