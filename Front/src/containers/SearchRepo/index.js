/*
* Componentes basico
*
* Versión 1.0
* Fecha de creación 2018-06-28
* Creado por admin
*/

import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import actions from './actions';
import validate from './validate';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Form from '../../components/Form';

export const SearchForm = props => {
  const { error, handleSubmit, pristine, submitting, findRepo } = props;
  const { repos, loading } = props;
  return (
    <Form onSubmit={handleSubmit(findRepo)}>
      <div className="row">
        <Field name="username" type="text" component={Input} label="Username" />
      </div>
      <div className="row m-t">
        <div className="form-group">
          <Button type="submit" disabled={pristine || submitting}>
            Buscar
          </Button>
        </div>
        {loading && 'Cargando....'}
        <ul>
          {repos.map(rep => (
            <li key={rep.id}>
              <a href={rep.html_url} target="_new">
                {rep.name}
              </a>
            </li>
          ))}
        </ul>
        {error && <strong>{error}</strong>}
      </div>
    </Form>
  );
};

const SearchRepo = reduxForm({
  form: 'SearchForm',
  validate
})(SearchForm);

const mapStateToProps = state => {
  return {
    ...state.SearchRepo
  };
};

export default connect(
  mapStateToProps,
  actions
)(SearchRepo);
