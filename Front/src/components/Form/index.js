/*
* Componentes basico
*
* Versión 1.0
* Fecha de creación 2017-11-21
* Creado por Lenovo
*/

import React from 'react';

const Form = props => (
  <div className="row">
    <div className="col-sm-12">
      <form {...props} className={`form ${props.className}`}>
        {props.children}
      </form>
    </div>
  </div>
);

export default Form;
