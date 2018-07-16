import reduxHelper from '../../utils/reduxHelper';
import { DUMMY_ACTION } from './actionType';

const reduxUtil = reduxHelper('{{ComponentName}}');

// Inicializar estados
/*
* Manejador de cambios de estados para {{ComponentName}}
*
* Versión 1.0
* Fecha de creación {{Date}} 
* Creado por {{Author}} 
*/

const initialState = {
  dummyState: ''
};

// Crear el reducer segun la accion
const reducer = reduxUtil.createReducer(
  {
    [DUMMY_ACTION](state, action) {
      const newState = { ...state, ...action.payload };
      return newState;
    }
  },
  initialState
);

export default reducer;
