/*
* Contenedor basico
*
* Versión 1.0
* Fecha de creación {{Date}} 
* Creado por {{Author}} 
*/

import React from 'react';
import { connect } from 'react-redux';
import actions from './actions';

const mapStateToProps = (state) => { return {
  ...state.{{ComponentName}}
}}

const {{ComponentName}} = ({dummyState, dummyAction}) => (
    <div>
      {dummyState} -- w/ Redux
      <button onClick={() => dummyAction({ dummyState: 'Hola mundo redux' })}>
        Change Status
      </button>
    </div>
);

export default connect(mapStateToProps, actions)({{ComponentName}});