/*
* Componentes basico
*
* Versión 1.0
* Fecha de creación 2017-11-21
* Creado por Lenovo
*/

import React from 'react';

export default ({
  input,
  label,
  type,
  meta: { touched, error, warning },
  readonly
}) => (
  <div className="form-group m-l">
    <label className="text-white" htmlFor={input.id}>
      {label}
    </label>
    <br />
    <input
      {...input}
      type={type}
      className="form-control"
      disabled={readonly === true}
    />
    {touched &&
      ((error && <span className="error">{error}</span>) ||
        (warning && <span>{warning}</span>))}
  </div>
);

export const Radio = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
  readonly
}) => (
  <div className="form-group m-l">
    <label className="text-white" htmlFor={input.id}>
      {label}
    </label>
    <br />
    <input
      {...input}
      className="input-rd option-input radio"
      type={type}
      disabled={readonly === true}
    />
    {touched &&
      ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
  </div>
);
