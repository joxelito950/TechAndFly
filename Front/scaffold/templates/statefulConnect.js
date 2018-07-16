/*
* Contenedor basico
*
* Versión 1.0
* Fecha de creación {{Date}} 
* Creado por {{Author}} 
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from './actions';

@connect((state) => ({
  ...state.{{ComponentName}}
}), actions)
export default class {{ComponentName}} extends Component {
  render() {
    const { dummyState, dummyAction } = this.props;
    return (
      <div>
        {dummyState} -- w/ Redux
        <button onClick={() => dummyAction({ dummyState: 'Hola mundo redux' })}>
          Change Status
        </button>
      </div>
    );
  }
}
