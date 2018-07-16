import React from 'react';
import { shallow, mount } from 'enzyme';
import { FormattedMessage, defineMessages } from 'react-intl';
import LanguageProvider from '..';
import { translationMessages } from '../../../i18n';

const messages = defineMessages({
  someMessage: {
    id: 'some.id',
    defaultMessage: 'This is some default message'
  }
});

describe('<LanguageProvider />', () => {
  it('deberia renderizar el children', () => {
    const children = <h1>Test</h1>;
    const renderedComponent = shallow(
      <LanguageProvider messages={messages} locale="es">
        {children}
      </LanguageProvider>
    );
    expect(renderedComponent.contains(children)).toBe(true);
  });
});

describe('<FormattedMessage />', () => {
  it('Deberia renderizar el translate por defecto', () => {
    const renderedComponent = mount(
      <LanguageProvider messages={translationMessages}>
        <FormattedMessage {...messages.someMessage} />
      </LanguageProvider>
    );
    expect(
      renderedComponent.find('FormattedMessage').text() ===
        translationMessages.es['some.id']
    ).toBe(true);
  });
});
