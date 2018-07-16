/*
* Archivos de acciones para {{ComponentName}}
*
* Versión 1.0
* Fecha de creación {{Date}} 
* Creado por {{Author}} 
*/
import { FORM_SAVE } from './actionType';

// Crear todas las acciones aquí
const actions = {
  saveData: values => {
    //agregar el evento en ../saga.js y usar el tipo del evento import {TYPE_EVENT} "../events/{{ComponentName}}Event""
    //esta accion es para que otro reducer lo tome y actualice alguna data, ya que
    //redux-form ya tiene un alamacen para el formulario, no es necesario tener un redux propio 
    return { type: FORM_SAVE, values };
  }
};

export default actions;
