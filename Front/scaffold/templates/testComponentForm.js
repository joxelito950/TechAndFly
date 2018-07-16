import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { Field } from 'redux-form';
import { {{ComponentName}}Form } from '../';
import Form from '../../../components/Form';
import Button from '../../../components/Button';
import Input from '../../../components/Input';

const renderComponent = (props = {}) => shallow(<{{ComponentName}}Form {...props} />);

describe('<{{ComponentName}}Form />', () => {
  it('Se deberia renderizar un formulario', () => {
    const handleSubmit = fn => fn;
    const renderedComponent = renderComponent({ handleSubmit });
    expect(renderedComponent.find(Form).exists()).toBe(true);
  });

  it('Se deberia existir los Fields->Inputs->label', () => {
    const handleSubmit = fn => fn;
    const renderedComponent = renderComponent({ handleSubmit });
    // agragar todos los input del formulario
    expect(
      renderedComponent.find(Field).props({ componnet: Input, name: 'title' })
        .label
    ).toEqual('Title');
  });

  it('Se deberia accionar la accion saveData', () => {
    // comportamiento del los valores que se espera
    const handleSubmit = fn => fn({ title: 'Hola mundo' });
    // action creation
    const saveData = sinon.stub().returns(jest.fn());

    const renderedComponent = renderComponent({
      handleSubmit,
      saveData
    });
    renderedComponent
      .find(Button)
      .find({ type: 'submit' })
      .simulate('click');

    // expectativa del action creation
    expect(saveData.calledWith({ title: 'Hola mundo' })).toBe(true);
  });
});
