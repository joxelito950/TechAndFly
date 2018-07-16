import React from 'react';
import { shallow } from 'enzyme';
import {{ComponentName}} from '../';

const renderComponent = (props = {}) => shallow(
    <{{ComponentName}} {...props} />
);

describe('<{{ComponentName}} />', () => {
  it('Se deberia renderizar el componente', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.type()).toEqual('div');
  }); 
});
