
/*
* Validador para el formulario ProductForm
*
* Versión 1.0
* Fecha de creación 2018-06-28 
* Creado por admin 
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

