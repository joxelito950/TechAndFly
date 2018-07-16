/*
* Archivos de acciones para Product
*
* Versión 1.0
* Fecha de creación 2018-06-28 
* Creado por admin 
*/
import { TYPE_EVENT } from '../../events/FindRepoByUsernameEvent';

// Crear todas las acciones aquí
const actions = {
  findRepo: values => ({ type: TYPE_EVENT, username: values.username })
};

export default actions;
