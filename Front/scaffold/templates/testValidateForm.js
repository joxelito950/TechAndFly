import validate from '../validate';

describe('Validar datos del formulario => {{ComponentName}}Form', () => {
  it('Validar requeridos', () => {
    const values = { title: undefined };
    const errors = validate(values);
    expect(errors).toEqual({
      title: 'Este campo es requerido'
    });
  });

  it('Datos validos', () => {
    const values = { title: "Hola mundo" };
    const errors = validate(values);
    expect(errors).toEqual({});
  });
});
