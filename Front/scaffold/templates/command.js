/*
* Comando basico
*
* Versión 1.0
* Fecha de creación {{Date}} 
* Creado por {{Author}} 
*/

/**
 * Scope del comando, procesador de la logica del negocio
 */
const {{ComponentName}}Command = (payload) => {
    const state = payload.dummyState;
    return {
      state: state + " ---- Se proceso desde el comando"
    }
};


/**
 * Interfaz para ejecutar el comando
 */
module.exports = {
  executer: (payload, resultToUI, callEvent) => {
    const dataInfo = Object.assign({}, payload);
    const result = {{ComponentName}}Command(dataInfo);
    callEvent('{{ComponentName}}Event', result);    
  }
};
