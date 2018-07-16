/*
* Componentes basico
*
* Versión 1.0
* Fecha de creación {{Date}} 
* Creado por {{Author}} 
*/

import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import actions from './actions';
import validate from './validate';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Form from '../../components/Form';

@connect(state => ({}), actions)
export default class {{ComponentName}} extends Component {
  render() {
    const ReduxForm = reduxForm({
      form: '{{ComponentName}}',
      validate
    })({{ComponentName}}Form);
    return (
      <ReduxForm {...this.props} initialValues={{ title: 'Hola mundo' }} />
    );
  }
}

export const {{ComponentName}}Form = props => {
  const { error, handleSubmit, pristine, submitting, saveData } = props;
  return (
    <Form onSubmit={handleSubmit(saveData)}>
      <div className="row">
        <Field name="title" type="text" component={Input} label="Title" />
      </div>
      <div className="row m-t">
        <div className="form-group">
          <Button type="submit" disabled={pristine || submitting}>
            Guadar
          </Button>
        </div>
        {error && <strong>{error}</strong>}
      </div>
    </Form>
  );
};
