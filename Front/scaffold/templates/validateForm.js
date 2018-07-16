
/*
* Validador para el formulario {{ComponentName}}Form
*
* Versión 1.0
* Fecha de creación {{Date}} 
* Creado por {{Author}} 
*/

export default values => {
  const errors = {};
  const requiredFields = [
    'title'
  ];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Este campo es requerido';
    }
  });
  return errors;
};

